import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import './index.scss'

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);
const RenderLoading = () => <Spin tip="正在加载中..." indicator={antIcon}/>;
export default RenderLoading;
