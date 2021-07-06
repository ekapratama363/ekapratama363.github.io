import React, { Component } from 'react';
import {
    Card, Row, Col, Button, Pagination,
    Modal, Carousel, Skeleton, Image
} from 'antd';
import Api from '../../helpers/api';
import Show from './Show';

const api = new Api();

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            // dataModal: [],

            q: '', //query for search
            selectedRowKeys: [],
            pagination: {},
            loading: true,
            // visible: false,
            showModal: false,
            selectedData: ''
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

    handleOk = (param) => {
        // console.log('param')
        this.setState({ showModal: param })
    }

    handleShowModalAndSendId = (param) => {
        console.log('selectedId', param)
        this.setState({
            selectedData: param,
            showModal: true
        })
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
            start: pagination,
            offset: pagination,
        });
    }


    render() {

        const { current, total } = this.state.pagination
        return (
            <div>
                {
                    this.state.loading ?
                        <Row>
                            <Col xs={24} xl={24} style={{ padding: '15px' }}>
                                <Card><Skeleton active /></Card> 
                            </Col>
                        </Row> :
                        <div>
                            <Row>
                                {this.state.data.map((item, key) => {
                                    return (
                                        <Col key={key} xs={24} xl={12} style={{ padding: '15px' }}>
                                            <Card title={item.name} bordered={false}
                                                actions={[
                                                    <Button type="primary" onClick={() => this.handleShowModalAndSendId(item.id)}
                                                        style={{ alignContent: 'center' }}>Detail</Button>
                                                ]}>
                                                    <Image 
                                                        style={{ 
                                                            width: 'auto',
                                                            maxWidth: '100%',
                                                            maxHeight: '100%',
                                                            height: 'auto', 
                                                        }}
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
                            
                            <Show
                                showModal={this.state.showModal}
                                selectedData={this.state.selectedData}
                                handleOk={this.handleOk}/>
                        </div>
                }

            </div>
        )
    }
}

export default Portfolio;