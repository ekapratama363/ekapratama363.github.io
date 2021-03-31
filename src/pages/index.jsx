import React, { Component } from 'react';
import {
    Layout,
    Row, Col,
    Card, Button
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
                            <Portfolio/>
                            {/* <Row> */}
                                {/* <Col xs={24} xl={12} style={{ padding: '15px' }}>
                                    <Card title="" bordered={false}
                                        actions={[
                                            <Button type="primary" onClick={this.showModal}
                                                style={{ alignContent: 'center' }}>
                                                Detail
                                                </Button>
                                        ]}>
                                        <img
                                            style={{ width: '100%' }}
                                            alt="white-shirt"
                                            src={
                                                'https://ekapratama363.github.io/w3images/fsm4.PNG'
                                            }
                                        />
                                        <p style={{ textAlign: 'center', paddingTop: '20px' }}>test</p>
                                    </Card>
                                </Col>

                                <Col xs={24} xl={12} style={{ padding: '15px' }}>
                                    <Card title="" bordered={false}
                                        actions={[
                                            <Button type="primary" onClick={this.showModal}
                                                style={{ alignContent: 'center' }}>
                                                Detail
                                                </Button>
                                        ]}>
                                        <img
                                            style={{ width: '100%' }}
                                            alt="white-shirt"
                                            src={
                                                'https://ekapratama363.github.io/w3images/fsm4.PNG'
                                            }
                                        />
                                        <p style={{ textAlign: 'center', paddingTop: '20px' }}>test</p>
                                    </Card>
                                </Col> */}
                            {/* </Row> */}

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