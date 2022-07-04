import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react"
import sidebar1 from '../../img/wasbit1.jpeg'
import sidebar2 from '../../img/wasbit2.jpeg'
import sidebar3 from '../../img/wasbit3.jpeg'
import 'swiper/css'


const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Upcomming Events</span>
        
        <Swiper
              spaceBetween={1}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider">
            <SwiperSlide>
                <img src={sidebar1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sidebar3} alt="" />
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Portfolio