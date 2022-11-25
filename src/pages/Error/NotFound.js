import React from 'react';
import {Button, Result} from 'antd';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="页面丢失"
            subTitle="点击下方按钮返回首页"
            extra={<Button type="primary" onClick={() => navigate('/home')}>返回首页</Button>}
        />
    )
};
export default NotFound;
