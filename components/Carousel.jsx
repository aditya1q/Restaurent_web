import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Carousel = () => {
    const imageSources = [
        '/assests/first.jpg',
        '/assests/second.jpg',
        '/assests/third.jpg',
        '/assests/fourth.jpg',
        '/assests/fifth.jpg',
    ];

    return (
        <div className='h-[450px] object-contain z-0'>
            <Swiper
                spaceBetween={0}
                navigation
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
                className='h-[100%] object-contain items-center justify-center flex w-[100%]  '
            >
                {imageSources.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} className='object-contain' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
