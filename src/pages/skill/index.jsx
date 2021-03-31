import React, { Component } from 'react';
import {
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

    fetch = (params = {}) => {
        // console.log('params:', params);
        const { q } = this.state
        this.setState({ loading: true });

        api.getSkillList({ ...params, q })
            .then(response => {
                const data = response.data;
                const pagination = { ...this.state.pagination };

                // console.log(data.data);
                pagination.current = data.start
                pagination.total = data.recordsTotal;
                pagination.pageSize = parseInt(data.length);

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        data: data.data,
                        pagination,
                    }, () => {
                        // console.log(this.state.data)
                    })
                }
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <Card><Skeleton active/></Card>:
                        <Card bordered={false}>
                            {
                                this.state.data.map((item) => {
                                    return (
                                        <div style={{ paddingBottom: '20px' }}>
                                            <p>{item.name}</p>
                                            <Progress percent={item.progress} />
                                        </div>
                                    )
                                })
                            }
                        </Card>
                }
            </div>
        )
    }
}

export default Skill;