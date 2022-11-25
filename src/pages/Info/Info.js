import React from 'react';
import {useLocation} from "react-router-dom";
import './info.scss'
import {Image} from "tdesign-react";
import RenderVisitError from "../Error/RenderVisitError";

export default function Info() {

    const location = useLocation();

    return (
        location.state ? (
            <div className={'info'}>
                <div className="img">
                    <Image
                        src={location.state.img}
                        fit="cover"
                        position="center"
                        shape="round"
                        className={'image'}
                        lazy
                    />
                </div>
                <div className="content">
                    <div className="text" dangerouslySetInnerHTML={{__html: location.state.desc}}></div>
                </div>
            </div>) : <RenderVisitError/>
    );
}
