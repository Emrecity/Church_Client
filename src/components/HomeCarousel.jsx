import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HomeCard from './HomeCard';

const HomeCarousel = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
    };

    const data =[{
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage1.jpg'
    },
    {   
        title: 'Home',
        description: 'Welcome to the Church System',
       imageUrl: 'carouselImage2.jpg'
    },
    {   
        title: 'Home',
        description: 'Welcome to the Church System',
       imageUrl: 'carouselImage3.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage4.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage5.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage6.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage7.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage8.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage9.jpg'
    },
    {
        title: 'Home',
        description: 'Welcome to the Church System',
        imageUrl: 'carouselImage10.jpg'
    }]

  return (
    <div className='my-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
            {data.map((item,index)=>{
              return <SwiperSlide key={index}><HomeCard title={item.title} description={item.description} imageUrl={item.imageUrl}/></SwiperSlide>
            })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default HomeCarousel