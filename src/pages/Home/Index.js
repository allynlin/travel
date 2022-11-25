import React from "react";
import RenderSwiper from "./RenderSwiper";
import './home.scss'
import {Image} from "tdesign-react";
import place1 from '../../assets/home/place/place1.jpg';
import place2 from '../../assets/home/place/place2.jpg';
import place3 from '../../assets/home/place/place3.jpg';
import place4 from '../../assets/home/place/place4.jpg';
import RenderTabs from "./RenderTabs";

export default function Index() {
    return (
        <div className={'home'}>
            <RenderSwiper/>
            <div className="place">
                <div className="content">
                    <h1>心向往之的<br/>可去之处</h1>
                    <div className="card">
                        <div className="img">
                            <Image
                                src={place1}
                                fit="cover"
                                position="center"
                                shape="round"
                                className={'image'}
                                lazy
                            />
                        </div>
                        <div className="img">
                            <Image
                                src={place2}
                                fit="cover"
                                position="center"
                                shape="round"
                                className={'image'}
                                lazy
                            />
                        </div>
                        <div className="img">
                            <Image
                                src={place3}
                                fit="cover"
                                position="center"
                                shape="round"
                                className={'image'}
                                lazy
                            />
                        </div>
                        <div className="img">
                            <Image
                                src={place4}
                                fit="cover"
                                position="center"
                                shape="round"
                                className={'image'}
                                lazy
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="do">
                <div className="content">
                    <h1>心向往之的<br/>可去之处</h1>
                    <div className="card">
                        <RenderTabs/>
                    </div>
                </div>
            </div>
        </div>
    );
}
