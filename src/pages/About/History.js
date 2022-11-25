import React from 'react';
import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;
export default function History() {
    return (
        <Typography>
            <Title>历史文化</Title>
            <Divider/>
            <Text>
                <p>长沙约有2400年建城史，属于典型的具有湖湘文化特色都市。</p>
                <p>语言、饮食、民俗、传统街道和民剧都具有浓郁的湖南特色。火辣辣的湘菜和脍炙人口的湘剧、湘绣、花鼓戏等是湖南传统文化的代表，电视湘军则是湖南市民文化和流行文化的前锋。</p>
                <p>长沙的方言复杂且极富特色，市区、长沙县、望城县、宁乡县以浏阳市西部少数地区都通行湘方言，浏阳大部分地区使用的则是赣方言，浏阳东部还有少部分使用客家方言的居民。</p>
            </Text>
        </Typography>
    );
}
