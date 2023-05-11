import { ConfigProvider, theme } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import {
    Layout,
    Row, Col,
} from 'antd';
import './index.css';
import Skill from './skill/index'
import Profile from './profile/index'
import Portfolio from './portofolio/index';

const { Content, Footer } = Layout;

const Main = () => {
    const [themeStyle, setThemeStyle] = useState({
        icon: '🌚',
        color: 'light'
    })

    const changeTheme = (icon, color) => {
        setThemeStyle({
            icon, color
        })
    }

    return (
        <ConfigProvider
            theme={{
                algorithm: themeStyle.color == 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <Layout className="layout">
                <Content style={{ padding: '15px' }}>
                    <Row>
                        <Col xs={24} xl={4} style={{ padding: '15px' }}>
                            <Profile themeStyle={themeStyle} changeTheme={changeTheme} />
                        </Col>

                        <Col xs={24} xl={16}>
                            <Portfolio />
                        </Col>

                        <Col xs={24} xl={4} style={{ padding: '15px' }}>
                            <Skill />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </ConfigProvider>
    );
}

export default Main;