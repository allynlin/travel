import React from 'react';
import {Image, Space} from 'tdesign-react';
import about from './about.jpg'

export default function RenderImage() {
    return (
        <Space direction="vertical" style={{width: '100%'}}>
            <Image
                src={about}
                fit="cover"
                position="center"
                style={{height: 400}}
            />
        </Space>
    );
}
