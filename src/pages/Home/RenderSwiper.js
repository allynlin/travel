import React from 'react';
import {Swiper, Image} from 'tdesign-react';
import Image1 from '../../assets/swiper/Image1.jpg';
import Image2 from '../../assets/swiper/Image2.jpg';
import Image3 from '../../assets/swiper/Image3.jpg';
import Image4 from '../../assets/swiper/Image4.jpg';
import Image5 from '../../assets/swiper/Image5.jpg';

const {SwiperItem} = Swiper;

export default function RenderSwiper() {
    return (
        <div>
            <Swiper
                animation="slide"
                autoplay
                defaultCurrent={0}
                direction="horizontal"
                duration={300}
                interval={2000}
                loop
                stopOnHover
                trigger="hover"
            >
                <SwiperItem>
                    <Image
                        src={Image1}
                        fit="cover"
                        position="center"
                        style={{height: 500}}
                        lazy
                    />
                </SwiperItem>
                <SwiperItem>
                    <Image
                        src={Image2}
                        fit="cover"
                        position="center"
                        style={{height: 500}}
                        lazy
                    />
                </SwiperItem>
                <SwiperItem>
                    <Image
                        src={Image3}
                        fit="cover"
                        position="center"
                        style={{height: 500}}
                        lazy
                    />
                </SwiperItem>
                <SwiperItem>
                    <Image
                        src={Image4}
                        fit="cover"
                        position="center"
                        style={{height: 500}}
                        lazy
                    />
                </SwiperItem>
                <SwiperItem>
                    <Image
                        src={Image5}
                        fit="cover"
                        position="center"
                        style={{height: 500}}
                        lazy
                    />
                </SwiperItem>
            </Swiper>
        </div>
    );
}
