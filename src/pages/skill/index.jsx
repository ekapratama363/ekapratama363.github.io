import React, { Component } from 'react';
import {
    Button,
    Card, Progress,
    Skeleton
} from 'antd';

import Api from '../../helpers/api';

const api = new Api();

class Skill extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            offset: 1,

            q: '', //query for search
            selectedRowKeys: [],
            pagination: {},
            loading: true,
            visible: false,
        }

    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.offset !== this.state.offset) {
            this.fetch({ offset: this.state.offset })
        }
    }

    fetch = (params = {}) => {
        const { q } = this.state
        this.setState({ loading: true });

        api.getSkillList({ ...params, q })
            .then(response => {
                const data = response.data;
                const pagination = { ...this.state.pagination };

                pagination.current = data.start
                pagination.total = data.recordsTotal;
                pagination.pageSize = parseInt(data.length);

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        data: data.data,
                        pagination,
                    })
                }
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    loadMore = () => {
        this.setState((prevState) => ({
            offset: prevState.offset + 1
        }));
    };

    render() {
        return (
            <div>
                {
                    this.state.loading
                        ?
                        <Card><Skeleton /></Card>
                        :
                        <Card bordered={false}>
                            {
                                this.state.data.map((item, key) => {
                                    return (
                                        <div key={key} style={{ paddingBottom: '20px' }}>
                                            <p>{item.name}</p>
                                            <Progress percent={item.progress} showInfo={false} />
                                        </div>
                                    )
                                })
                            }
                            <div className="load-more">
                                {
                                    this.state.pagination.total > this.state.pagination.pageSize
                                        ?
                                        <Button onClick={this.loadMore} type="primary">
                                            {this.state.loading ? 'Loading...' : 'Load More'}
                                        </Button>
                                        :
                                        null
                                }
                            </div>
                        </Card>
                }
            </div>
        )
    }
}

export default Skill;