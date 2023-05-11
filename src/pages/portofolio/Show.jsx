
import React, { useEffect, useState } from 'react'
import {
    Modal, Carousel, Image, Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Api from '../../helpers/api'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const api = new Api

const Show = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (props.selectedData) {
            fetch(props.selectedData)
        }
    }, [props.selectedData])

    const handleOk = () => {
        props.handleOk(false)
    }

    const fetch = async (id) => {
        await api.viewPortfolioImageByPortfolioId(id)
            .then(response => {
                const data = response.data;
                if (response.status === 200) { //OK
                    setLoading(false)
                    setData(data)
                }
            })
            .catch(error => {
                setLoading(false)
            })
    }

    return (
        <Modal open={props.showModal}
            style={{ width: "100%", resize: "none" }}
            onOk={handleOk}
            closable={false}
            cancelButtonProps={{ style: { display: 'none' } }}>
            <Carousel autoplay>
                {
                    loading
                        ?
                        <Spin indicator={antIcon} />
                        :
                        data.map((item, key) => {
                            return (
                                <Image
                                    key={key}
                                    src={item.image_full_url}
                                />
                            )
                        })
                }
            </Carousel>
        </Modal>
    )
}

export default Show