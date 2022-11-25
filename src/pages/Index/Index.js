import React, {useEffect, useState} from 'react';
import {Menu} from 'antd';
import {Link, Outlet, useLocation} from "react-router-dom";
import './index.scss'

const items = [
    {
        label: <Link to={'/home'}>首页</Link>,
        key: 'home',
    }, {
        label: <Link to={'/about'}>关于长沙</Link>,
        key: 'about',
    }, {
        label: <Link to={'/travel'}>景点列表</Link>,
        key: 'travel',
    }, {
        label: <Link to={'/list'}>实用信息</Link>,
        key: 'list',
    },
];
const Index = () => {
    const [current, setCurrent] = useState('home');

    const location = useLocation();

    useEffect(() => {
        setCurrent(location.pathname.split('/')[1])
    }, [location])

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className="container">
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className={'menu'} items={items}/>
            <div className="out">
                <Outlet/>
            </div>
        </div>
    );
};
export default Index;
