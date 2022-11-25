import React from "react";
import {Card, Image, Space} from 'tdesign-react';
import {useNavigate} from "react-router-dom";
import './travel.scss'
import {Button, Typography} from "antd";
import data from "../../data";

const {Paragraph} = Typography;

export default function Travel() {

    const navigate = useNavigate();

    return (
        <div className={'travel'}>
            <div className="pic"></div>
            <div className="content">
                <Space direction="vertical" align="center" style={{width: '100%'}}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <Image
                                        src={item.img}
                                        fit="cover"
                                        position="center"
                                        shape="round"
                                        className={'image'}
                                    />
                                    <Card
                                        title={item.place}
                                        actions={<Button type="primary"
                                                         onClick={() => navigate('/info', {state: item})}>查看详情</Button>}
                                        bordered
                                        style={{width: '100%'}}
                                    >
                                        <Paragraph ellipsis={{rows: 3}}>
                                            <div className="text" dangerouslySetInnerHTML={{__html: item.title}}></div>
                                        </Paragraph>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Space>
            </div>
        </div>
    );
}
