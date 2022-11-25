import React, {useEffect} from "react";
import './index.scss'
import {InfoCircleIcon, TimeIcon, HistoryIcon, FormatHorizontalAlignTopIcon} from 'tdesign-icons-react';
import {Button} from "antd";
import {Outlet, useNavigate, useLocation} from "react-router-dom";
import RenderImage from "./RenderImage";

export default function About() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const lastPath = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
        // 根据 lastPath 来判断处于哪个按钮的状态
        const btn = document.getElementById(lastPath);
        btn && btn.classList.add('active');
        // 其余按钮移除 active
        const btns = document.getElementsByClassName('item');
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].id !== lastPath) {
                btns[i].classList.remove('active');
            }
        }
    }, [location])

    const changeActive = (e) => {
        // 向上查找父元素，直到找到有 item 类名的元素
        let item = e.target;
        while (!item.classList.contains('item')) {
            item = item.parentNode;
        }
        // 找到所有的 item 元素
        const items = document.querySelectorAll('.item');
        // 遍历所有的 item 元素，移除 active 类名
        items.forEach(item => {
            item.classList.remove('active');
        })
        // 给当前点击的元素添加 active 类名
        item.classList.add('active');
    }

    return (
        <>
            <RenderImage/>
            <div className={'about'}>
                <div className="left">
                    <Button theme="default" id={'basic'} ghost className={'item active'} onClick={e => {
                        changeActive(e)
                        navigate('/about/basic')
                    }}>
                        <InfoCircleIcon size={64}/>
                        <div className="title">基本信息</div>
                    </Button>
                    <Button theme="default" id={'custom'} ghost className={'item'} onClick={e => {
                        changeActive(e)
                        navigate('/about/custom')
                    }}>
                        <FormatHorizontalAlignTopIcon size={64}/>
                        <div className="title">地理气候</div>
                    </Button>
                    <Button theme="default" id={'history'} ghost className={'item'} onClick={e => {
                        changeActive(e)
                        navigate('/about/history')
                    }}>
                        <HistoryIcon size={64}/>
                        <div className="title">历史文化</div>
                    </Button>
                    <Button theme="default" id={'travel'} ghost className={'item'} onClick={e => {
                        changeActive(e)
                        navigate('/about/travel')
                    }}>
                        <TimeIcon size={64}/>
                        <div className="title">旅游时机</div>
                    </Button>
                </div>
                <div className="right">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
