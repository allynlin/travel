import React from 'react';
import {Tabs} from 'antd';
import art1 from '../../assets/home/art/art1.jpg';
import art2 from '../../assets/home/art/art2.jpg';
import art3 from '../../assets/home/art/art3.jpg';
import food1 from '../../assets/home/food/food1.jpg';
import food2 from '../../assets/home/food/food2.jpg';
import food3 from '../../assets/home/food/food3.jpg';
import food4 from '../../assets/home/food/food4.jpg';
import play1 from '../../assets/home/play/play1.jpg';
import play2 from '../../assets/home/play/play2.jpg';
import play3 from '../../assets/home/play/play3.jpg';
import play4 from '../../assets/home/play/play4.jpg';
import {Image} from "tdesign-react";

const App = () => {

    const mask = (e) => {
        return (
            <div
                style={{
                    background: 'rgba(0,0,0,.4)',
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {e}
            </div>
        )
    };

    const items = [
        {
            label: '美食',
            key: 'item-1',
            children: <div className={'tab'}>
                <div className="img">
                    <Image
                        src={food1}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('剁椒鱼头')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={food2}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('麻辣小龙虾')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={food3}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('长沙臭豆腐')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={food4}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('辣子鸡丁')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
            </div>
        }, {
            label: '文化艺术',
            key: 'item-2',
            children: <div className={'tab'}>
                <div className="img">
                    <Image
                        src={art1}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('马王堆')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={art2}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('湘茶')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={art3}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('窑铜官博物馆')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
            </div>
        }, {
            label: '休闲娱乐',
            key: 'item-3',
            children: <div className={'tab'}>
                <div className="img">
                    <Image
                        src={play1}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('橘子洲烟花')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={play2}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('看话剧')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={play3}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('听湘戏')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
                <div className="img">
                    <Image
                        src={play4}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        overlayContent={mask('岳麓山赏枫叶')}
                        overlayTrigger="hover"
                        lazy
                    />
                </div>
            </div>
        }
    ];

    return (
        <>
            <Tabs
                style={{
                    width: '100%',
                    height: '100%',
                }}
                tabPosition={'left'}
                items={items}
            />
        </>
    );
};
export default App;
