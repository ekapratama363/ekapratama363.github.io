import React, { Component } from 'react';
import {
    Card, Skeleton, Image, Switch, Space
} from 'antd';
import Api from '../../helpers/api';
import './index.css'

const api = new Api();

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

            loading: true,
            visible: false,
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch = (params = {}) => {
        const { q } = this.state
        this.setState({ loading: true });

        api.getProfileShow({ ...params, q })
            .then(response => {
                const data = response.data;

                if (response.status === 200) { //OK
                    this.setState({
                        loading: false,
                        data: data,
                    })
                }
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    changeTheme = (checked) => {
        if (!checked) {
            this.props.changeTheme('🌚', 'light')
            return
        }

        this.props.changeTheme('🌝', 'dark')
        this.setState({
            checkedDark: !checked
        })
    };

    render() {
        const { name, address, email, phone, whatsapp_link, position, image_full_url } = this.state.data
        return (
            <div className="profile-content">
                {
                    this.state.loading
                        ?
                        <Card><Skeleton active /></Card>
                        :
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
                                    <h4><a href={whatsapp_link} target="_blank" rel="noreferrer">{phone}</a></h4>

                                    <Space>
                                        <span>{this.props.themeStyle.icon}</span>
                                        <Switch size="small" checked={this.props.themeStyle.color === 'dark' ? true : false} onChange={this.changeTheme} />
                                    </Space>
                                </div>
                            </div>
                        </Card>
                }
            </div>
        )
    }
}

export default Profile;