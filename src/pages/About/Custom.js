import React from 'react';
import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;
export default function Custom() {
    return (
        <Typography>
            <Title>地理气候</Title>
            <Divider/>
            <Text>
                <p>长沙市地貌总的特征是：地势起伏较大，地貌类型多样，地表水系发育。</p>
                <p>长沙属亚热带季风气候，气候特征是：气候温和，降水充沛，雨热同期，四季分明。春温变化大，夏初雨水多，伏秋高温久，冬季严寒少。3月下旬至5月中旬，冷暖空气相互交绥，形成连绵阴雨低温寡照天气。</p>
            </Text>
        </Typography>
    );
}
