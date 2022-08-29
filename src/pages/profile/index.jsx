import React, { Component } from 'react';
import {
    Card, Skeleton, Image
} from 'antd';
import Api from '../../helpers/api';
import './index.css'

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
        const { name, address, email, phone, whatsapp_link, position, image_full_url } = this.state.data
        return (
            <div className="profile-content">
                {
                    this.state.loading ?
                        <Card><Skeleton active/></Card>:

                        <Card bordered={false}>
                            <div style={{ 'textAlign': 'center' }}>
                                <h1>{name}</h1>

                                <Image 
                                    style={{ 
                                        'height': '106px',
                                        'width': '106px',
                                        'borderRadius': '50%',
                                    }}
                                    src={image_full_url}
                                />

                                <div style={{ padding: '20px', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
                                    <h3>{position}</h3>
                                    <h4>{address}</h4>
                                    <h4><a href={`mailto:${email}`}>{email}</a></h4>
                                    <h4><a href={whatsapp_link} target="_blank">{phone}</a></h4>
                                </div>
                            </div>
                        </Card>
                }
            </div>
        )
    }
}

export default Profile;