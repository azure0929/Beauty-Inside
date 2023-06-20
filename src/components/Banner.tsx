import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'
import banner01 from '../../public/assets/main/banner/banner01.jpg'
import banner02 from '../../public/assets/main/banner/banner02.jpg'
import banner03 from '../../public/assets/main/banner/banner03.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'

import 'swiper/css'
import 'swiper/css/effect-fade'

const Banner = () => {

  const Banner = styled.div`
    position: relative;
  `

  const ProductLink = styled.a`
    > img {
      width: 100%;
      display: block;
    }
  `

  return (
    <div>
      <GlobalStyle />
      <Banner>
        <div className='inner'>
          <Swiper
            effect='fade'
            modules={[EffectFade, Autoplay, Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide><ProductLink href='javascript:void(0)'><img src={banner01}/></ProductLink></SwiperSlide>
            <SwiperSlide><ProductLink href='javascript:void(0)'><img src={banner02}/></ProductLink></SwiperSlide>
            <SwiperSlide><ProductLink href='javascript:void(0)'><img src={banner03}/></ProductLink></SwiperSlide>
            <SlidePrevButton />
            <SlideNextButton />
          </Swiper>
        </div>
      </Banner>
    </div>
  )
}

export default Banner