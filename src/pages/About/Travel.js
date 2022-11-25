import React from 'react';
import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;
export default function Custom() {
    return (
        <Typography>
            <Title>旅游时机</Title>
            <Divider/>
            <Text>
                <p>秋季的长沙气温通常在15℃至20℃左右，秋高气爽，可以去橘子洲赏秋色，爬岳麓山看枫叶。此时也是盛产小龙虾的季节，长沙特色小吃的美味赏味最佳时期。</p>
                <p>长沙建议游玩天数：3~5天</p>
                <p>如果你喜欢长沙的老街巷，你可以到古色古香的太平街去感受长沙人的“策”功。喜欢大学的书卷气息，你可以去岳麓山下的大学城一睹恰同学少年的风华。喜欢火辣辣的美食，你可以去南门口碰碰运气看看炸臭豆腐的老娭毑有没有出摊。喜欢潮流时尚，你可以拉着三五好友去黄兴路的步行街走走逛逛。喜欢泡吧休闲，你可以去解放西路或是化龙池的酒吧街尽情享受星城的夜生活。喜欢自然山河风光，你可以去橘子洲头独立寒秋，看着湘江北去。</p>
            </Text>
        </Typography>
    );
}
