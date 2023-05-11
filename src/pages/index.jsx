import React, { Component } from 'react';
import {
    Layout,
    Row, Col,
} from 'antd';
import "antd/dist/antd.css";
import './index.css';
import Skill from './skill/index'
import Profile from './profile/index'
import Portfolio from './portofolio/index';

const { Header, Content, Footer } = Layout;

class Main extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header />

                <Content style={{ padding: '15px' }}>
                    <Row>
                        <Col xs={24} xl={4} style={{ padding: '15px' }}>
                            <Profile />
                        </Col>

                        <Col xs={24} xl={16}>
                            <Portfolio />
                        </Col>

                        <Col xs={24} xl={4} style={{ padding: '15px' }}>
                            <Skill />
                        </Col>
                    </Row>
                </Content>

                <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff' }}>© Eka Pratama</Footer>

            </Layout>
        );
    }
}

export default Main;