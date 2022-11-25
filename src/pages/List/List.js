import React from "react";
import './index.scss'
import {Anchor, Typography} from 'antd';

const {Title, Paragraph} = Typography;
const {Link} = Anchor;

export default function List() {
    return (
        <>
            <div className={'list'}>
                <div className="pic"></div>
                <div className="content">
                    <Typography>
                        <Title id={'main'}>实用信息</Title>
                        <Paragraph>
                            1、长沙以湘菜为主旋律，是我国的八代菜系之一，菜品种类繁多，口味辛辣、鲜香。
                        </Paragraph>
                        <Paragraph>
                            2、学生党记得携带学生证，长沙的众多景点门票都是学生证半价的！
                        </Paragraph>
                        <Paragraph>
                            3、夏天去长沙的话，天气比较炎热，可以准备一些藿香正气水哦~
                        </Paragraph>
                        <Title id={'leave'}>到达与离开</Title>
                        <Title id={'plane'} level={2}>飞机</Title>
                        <Paragraph>
                            长沙有机场：黄花国际机场、宁乡巷子口机场
                        </Paragraph>
                        <Title id={'cshh'} level={4}>长沙黄花国际机场</Title>
                        <Paragraph>
                            邮箱：<a href="mailto:jcgljtbgs@163.com">jcgljtbgs@163.com</a><br/>
                            官网：<a href="http://csa.hnjcjt.com/">http://csa.hnjcjt.com/</a>
                        </Paragraph>
                        <Title id={'cscxf'} level={4}>长沙磁悬浮快线（区段计价票制）</Title>
                        <Paragraph>
                            磁浮高铁站—磁浮机场站20 元/人<br/>
                            磁浮机场站—磁浮梨站10 元/人<br/>
                            磁浮梨站—磁浮高铁站10 元/人。
                        </Paragraph>
                        <Title id={'bs'} level={4}>机场大巴</Title>
                        <Paragraph>
                            如遇突发情况或天气原因等因素，发车班次会略有调整，机场巴士咨询电话：0731-84798076
                        </Paragraph>
                        <Title id={'planebus'} level={4}>市内线路（机场发车）</Title>
                        <Paragraph>
                            1. 机场 — 运达中央广场（长沙大道地铁口） — 高桥南大门 — 火车站(山水时尚酒店：原民航酒店)
                            ：首班：7:30，末班为最后一个航班到达；间隔15-20分钟/班；行驶时间约40分钟；票价为16元；咨询电话0731-84798076。
                        </Paragraph>
                        <Paragraph>
                            2. 机场 — 高铁站（经停） — 汽车南站 ：首班：08:00，汽车南站末班18:00，高铁站末班19:30，间隔30分钟/班；行驶时间约55分钟；票价21元;
                            咨询电话0731-84798076。
                        </Paragraph>
                        <Paragraph>
                            3. 机场 — 汽车西站（经停广电） ：首班08:00，末班19:00；间隔20-30分钟/班；行驶时间约70分钟；票价30.5元;
                            咨询电话0731-84798076。
                        </Paragraph>
                        <Title id={'inbus'} level={4}>室内线路（市区发车）</Title>
                        <Paragraph>
                            1. 火车站(山水时尚酒店：原民航酒店) — 宇成朝阳酒店 — 机场
                            ：首班05:00，末班22:30；间隔15-20分钟/班；行驶时间40分钟；票价16元；咨询电话：0731-84129201。
                        </Paragraph>
                        <Paragraph>
                            2. 汽车南站 — 机场 ：首班08:00，末班18:00；间隔30分钟/班；行驶时间55分钟；票价20.5元；咨询电话：0731-85224349。3.
                            汽车西站 — 机场 ：首班07:30，末班18:30；间隔20-30分钟/班；行驶时间70分钟；票价30.5元。
                        </Paragraph>
                        <Title id={'bus'} level={4}>公交</Title>
                        <Paragraph>
                            114路（黄花机场首末站—长沙火车站）：首班06:20；末班19:00；票价2元<br/>
                            X123路（临空南路口—锦泰广场）：首班07:00；末班19:00；票价2元<br/>
                            X301路（黄花机场首末站—星沙汽车站）：首班06:30；末班19:00；票价2元<br/>
                            XT30路/星通30路（黄花机场首末站—星沙东一路站）：首班06:30；末班19:00；票价2元
                        </Paragraph>
                        <Title id={'train'} level={2}>火车</Title>
                        <Paragraph>长沙有火车站长沙站、长沙南站、长沙西站等</Paragraph>
                        <Paragraph>长沙站：车站始建于1911年，于1975年动工改建，1977年通车投用，为特等站。</Paragraph>
                        <Paragraph>车站地址：湖南省长沙市芙蓉区车站中路406号</Paragraph>
                        <Paragraph>长沙南站：长沙南站站场规模为13台28线，车站以“山水洲城“为理念设计。</Paragraph>
                        <Paragraph>车站地址：湖南省长沙市雨花区花候路</Paragraph>
                        <Paragraph>长沙西站：长沙西站共2台4线，2020年5月8日，站台开始改建扩建，预计于预计车站停办至2022年12月31日。车站改建扩建期间各车次列车不停靠长沙西站。</Paragraph>
                        <Paragraph>车站地址：湖南省长沙市望城区金山桥街道和黄金园街道交界处</Paragraph>
                        <Title id={'longbus'} level={2}>长途汽车</Title>
                        <Paragraph>长沙公路交通很发达，省内各地及湖南省周边的城市都有车直达。长沙市内有几个较大的长途汽车站，即南站、东站、西站、北站。为了方便株洲、湘潭客流往来长沙，还有专门的长株潭客运站。</Paragraph>
                        <Paragraph>长沙长株潭汽车站：长株潭汽车站坐落于长沙市火车站对面。除了发往株洲、湘潭等地，还有部分开往湖南部分地区以及武汉的客车，由于离火车站近，便于外地乘客转乘。</Paragraph>
                        <Paragraph>地址：长沙市芙蓉区车站中路339号</Paragraph>
                        <Paragraph>长沙汽车东站：汽车东站处于黄花机场、火车站、武广长沙南站三地之中，车站有发往省内省外多个区域的长途客车。</Paragraph>
                        <Paragraph>地址：长沙市芙蓉区远大一路1021号</Paragraph>
                        <Paragraph>长沙汽车南站：汽车南站主要开行长沙往南方向的8个地市和沪苏粤桂浙赣皖豫闽等省的部分城市。日发班次1080个，日均发送旅客1.8万人次。</Paragraph>
                        <Paragraph>地址：长沙市雨花区中意一路</Paragraph>
                        <Paragraph>长沙汽车西站：汽车西站主要发往省内、省外（重庆、江西、武汉等地）也有班车，还可以换乘公交、地铁。</Paragraph>
                        <Paragraph>地址：长沙市岳麓区枫林三路53号</Paragraph>
                        <Paragraph>长沙汽车北站：北站运营线路以短途为主，发往望城梅花岭、铜官、东城、湘阴县等地。</Paragraph>
                        <Paragraph>地址：长沙市开福区芙蓉北路</Paragraph>
                        <Title id={'phone'}>求助电话</Title>
                        <Paragraph>
                            <ul>
                                <li>长沙市总工会咨询热线：0731-12351</li>
                                <li>长沙文联：0731-88666977，0731-88666979</li>
                                <li>长沙市卫生健康委员会咨询热线：0537-12345</li>
                                <li>长沙市市场监督管理局：0731-88635353</li>
                                <li>长沙市交通运输局：0731-88151200</li>
                                <li>长沙市文化旅游广电局：0731-88666710</li>
                                <li>长沙市知识产权局：0731-88666846</li>
                            </ul>
                        </Paragraph>
                        <Title id={'hospital'}>医疗安全</Title>
                        <Paragraph>长沙医院众多，最主要的有湖南省人民医院及湘雅医院，具备优质的专业素养，及精湛的医疗技术。</Paragraph>
                        <Title id={'rm'} level={2}>湖南省人民医院（湖南师范大学附属第一医院）</Title>
                        <Paragraph>地址：长沙市芙蓉区解放西路61号</Paragraph>
                        <Paragraph>网址：<a href="http://www.hnsrmyy.com/">http://www.hnsrmyy.com/</a></Paragraph>
                        <Paragraph>联系方式：</Paragraph>
                        <Paragraph>正常上班时间门急诊咨询：0731-83929141（天心阁）/84762791（马王堆）/81866120（岳麓山）</Paragraph>
                        <Paragraph>非正常上班时间门急诊咨询：0731-82278048（天心阁）/84731731（马王堆）/19892801600（岳麓山）</Paragraph>
                        <Title id={'xy'} level={2}>中南大学湘雅医院</Title>
                        <Paragraph>地址：长沙市开福区湘雅路87号</Paragraph>
                        <Paragraph>电话：（总机）0731-84328888；（夜间值班室）0731-84327324</Paragraph>
                        <Paragraph>网址：<a
                            href="http://www.xiangya.com.cn/web/index.aspx">http://www.xiangya.com.cn/web/index.aspx</a></Paragraph>
                    </Typography>
                </div>
            </div>
            <div className="anchor">
                <Anchor offsetTop={100} targetOffset={80}>
                    <Link href="#main" title="实用信息"/>
                    <Link href="#leave" title="到达与离开">
                        <Link href="#plane" title="飞机">
                            <Link href="#cshh" title="长沙黄花国际机场"/>
                            <Link href="#cscxf" title="长沙磁悬浮快线"/>
                            <Link href="#bs" title="机场大巴"/>
                            <Link href="#planebus" title="市内线路"/>
                            <Link href="#inbus" title="室内线路"/>
                        </Link>
                        <Link href="#bus" title="公交"/>
                        <Link href="#train" title="火车"/>
                        <Link href="#longbus" title="长途汽车"/>
                    </Link>
                    <Link href="#phone" title="求助电话"/>
                    <Link href="#hospital" title="医疗安全">
                        <Link href="#rm" title="湖南省人民医院"/>
                        <Link href="#xy" title="中南大学湘雅医院"/>
                    </Link>
                </Anchor>
            </div>
        </>
    );
}
