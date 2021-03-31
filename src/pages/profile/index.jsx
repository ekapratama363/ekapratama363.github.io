import React, { Component } from 'react';
import {
    Card, Skeleton
} from 'antd';
import Api from '../../helpers/api';

const api = new Api();

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: [],

            loading: true,
            visible: false,
        }

    }

    componentDidMount() {
        this.fetch();

        // console.log(this.state.data)
    }

    fetch = (params = {}) => {
        // console.log('params:', params);
        const { q } = this.state
        this.setState({ loading: true });

        api.getProfileShow({ ...params, q })
            .then(response => {
                // console.log(response.data);
                const data = response.data;

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        data: data,
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
        const { name, address, email, phone, position, image_full_url } = this.state.data
        return (
            <div>
                {
                    this.state.loading ?
                        <Card><Skeleton active/></Card>:

                        <Card bordered={false}>
                            <div style={{ 'textAlign': 'center' }}>
                                <h1>{name}</h1>

                                <img src={image_full_url}
                                    style={{
                                        'height': '106px',
                                        'width': '106px',
                                        'borderRadius': '50%',
                                    }} alt="Avatar" />

                                <hr />

                                <div style={{ padding: '20px' }}>
                                    <h3>{position}</h3>
                                    <h4>{address}</h4>
                                    <h4>{email}</h4>
                                    <h4>{phone}</h4>
                                </div>
                            </div>
                        </Card>
                }
            </div>
        )
    }
}

export default Profile;