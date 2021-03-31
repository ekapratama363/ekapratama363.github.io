import React, { Component } from 'react';
import {
    Card, Row, Col, Button, Pagination,
    Modal, Carousel, Skeleton
} from 'antd';
import Api from '../../helpers/api';

const api = new Api();

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            dataModal: [],

            q: '', //query for search
            selectedRowKeys: [],
            pagination: {},
            loading: true,
            visible: false,
            showModal: false
        }

    }

    componentDidMount() {
        this.fetch();
    }

    fetch = (params = {}) => {
        // console.log('params:', params);
        const { q } = this.state
        this.setState({ loading: true });

        api.getPortfolioList({ ...params, q })
            .then(response => {
                console.log(params)
                const data = response.data;
                const pagination = { ...this.state.pagination };

                // console.log(data.data);
                pagination.current = data.offset
                pagination.total = data.length;
                pagination.pageSize = parseInt(data.length);

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        data: data.data,
                        pagination,
                    }, () => {
                        // console.log(this.state.pagination)
                    })
                }
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }


    showModal = (id) => {
        console.log(id)
        this.setState({ showModal: true })

        api.viewPortfolioImageByPortfolioId(id)
            .then(response => {

                const data = response.data;

                console.log(data)

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        dataModal: data
                    }, () => {
                        console.log(this.state.dataModal)
                    })
                }
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    handleOk = () => {
        // console.log('show')
        this.setState({ showModal: false })
    }

    handleCancel = () => {
        // console.log('show')
        this.setState({ showModal: false })
    }

    onSlideModal = (a, b, c) => {
        console.log(a, b, c);
    }

    handlePaginationChange = (pagination, filters, sorter) => {
        console.log(pagination);
        const pager = { ...this.state.pagination };
        pager.current = pagination;
        this.setState({
            pagination: pager,
        }, () => {
            console.log(this.state.pagination)
        });
        this.fetch({
            //   per_page: pagination.pageSize,
            start: pagination,
            offset: pagination,
            //   sort_field: sorter.field,
            //   sort_order: sorter.order==='ascend' ? 'asc' : 'desc',
            //   ...filters,
        });
    }


    render() {

        const { current, total } = this.state.pagination
        return (
            <div>
                {
                    this.state.loading ?
                        <Card><Skeleton active /></Card> :
                        <div>
                            <Row>
                                {this.state.data.map(item => {
                                    return (
                                        <Col xs={24} xl={12} style={{ padding: '15px' }}>
                                            <Card title={item.name} bordered={false}
                                                actions={[
                                                    <Button type="primary" onClick={() => this.showModal(item.id)}
                                                        style={{ alignContent: 'center' }}>Detail</Button>
                                                ]}>
                                                <img
                                                    style={{ 
                                                        width: 'auto',
                                                        maxWidth: '100%',
                                                        maxHeight: '100%',
                                                        height: 'auto', 
                                                    }}
                                                    alt={item.name}
                                                    src={item.image_full_url}
                                                />
                                                <p style={{ textAlign: 'center', paddingTop: '20px' }}>{item.description}</p>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>

                            <Row>
                                <Col xs={24}
                                    style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Pagination
                                        defaultCurrent={current}
                                        total={total}
                                        onChange={this.handlePaginationChange} />
                                </Col>
                            </Row>

                            <Modal visible={this.state.showModal}
                                style={{ width: "100%", resize: "none" }}
                                onOk={this.handleOk}
                                closable={false}
                                cancelButtonProps={{ style: { display: 'none' } }}>
                                {
                                    this.state.loading ?
                                        <Skeleton /> :
                                        <Carousel afterChange={this.onSlideModal} autoplay>
                                            {
                                                this.state.dataModal ?
                                                    this.state.dataModal.map((item) => {
                                                        return (
                                                            <img src={item.image_full_url} alt={item.image} />
                                                        )
                                                    })
                                                    : ''
                                            }
                                        </Carousel>
                                }
                            </Modal>
                        </div>
                }

            </div>
        )
    }
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};

export default Portfolio;