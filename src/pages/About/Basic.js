import React from 'react';
import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;
export default function Basic() {
    return (
        <Typography>
            <Title>基本信息</Title>
            <Divider/>
            <Text>
                <p>长沙，湖南省省会，华中地区城市，别称星城，古称潭州，是著名的山水洲城、快乐之都。</p>
                <p>黄兴路上走着窈窕身影，中山亭下立着商贾人家</p>
                <p>化龙池那儿歌舞升平，太平街里边碎梦空花，岳麓山上长着清远，文庙坪里住着年华。怀湘水之灵秀，羡天心阁之浑厚，临橘子洲头而长吟，观贾谊故居乃怀旧，这即是长沙。人人都说它有一份独特的韵味，一千个人眼里有一千个长沙，它是古时硝烟弥漫的潭州，是近代中国的半部历史，是今天的娱乐之都。</p>
            </Text>
        </Typography>
    );
}
