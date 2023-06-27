import GlobalStyle from '../styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/effect-fade'

const WarmProduct = () => {

  const Warm = styled.div`
    margin-top: 180px;
    > div.inner {
      position: relative;
      width: calc(100% - 500px);
      margin: 0 auto;
      > h1 {
        font-family: 'Noto Sans KR';
        font-size: 32px;
        letter-spacing: -.05em;
        font-weight: 500;
        margin-bottom: 40px;
      }
    }
  `

  const WarmList = styled.ul`
    display: flex;
    margin-top: 40px;
    > li {
      width: 300px;
      margin-right: 16px;
      &:last-child {
        margin-right: 0px;
      }
      > div.thumbnail {
        > a {
          > img {
            width: 100%;
            display: block;
            object-fit: cover;
          }
        }
      }
      > div.contents {
        margin-top: 10px;
        margin-bottom: 26px;
        > h3 {
          font-family: 'Noto Sans KR';
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -.05em;
          margin-bottom: 4px;
        }
        > span {
          display: block;
          font-family: 'Noto Sans KR';
          letter-spacing: -.05em;
          font-size: 12px;
          color: #8e8e8e;
        }
      }
      > p {
        font-family: 'Noto Sans KR';
        letter-spacing: -.05em;
        text-align: right;
        font-size: 14px;
        > span {
          font-family: 'Spoqa Han Sans Neo';
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  `

  const Prevbtn = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 9;
  `

  const Nextbtn = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 9;
  `

  return (
    <div>
      <GlobalStyle />
      <Warm>
        <div className="inner">
          <h1>추천 제품</h1>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <WarmList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwf4074b8d/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Lovin_Lips_Matte_GLBL_B_square_0607845029809.jpg?sw=856&sh=750&sm=fit' alt='립스틱-러빙 립스' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>러빙 립스</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw73a7bdcc/hi-res/NARS_SP22_SpringEdit_Afterglow_PDPCrop_Soldier_Afterglow_Lipshine_LoverToLover_GLBL_2000x2000.jpg?sw=856&sh=750&sm=fit' alt='에프터글로우 립 샤인-러버 투 러버' /></a>
                  </div>
                  <div className='contents'>
                    <h3>에프터글로우 립 샤인</h3>
                    <span>러버 투 러버</span>
                  </div>
                  <p><span>37,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw594c7940/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Heat_Wave_Matte_GLBL_B_square_0607845029618.jpg?sw=856&sh=750&sm=fit' alt='오리지널 립스틱-히트 웨이브' /></a>
                  </div>
                  <div className='contents'>
                    <h3>오리지널 립스틱</h3>
                    <span>히트 웨이브</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa5933760/hi-res/0607845053088.jpg?sw=856&sh=750&sm=fit' alt='싱글 아이섀도우-나이트 스타' /></a>
                  </div>
                  <div className='contents'>
                    <h3>싱글 아이섀도우</h3>
                    <span>나이트 스타</span>
                  </div>
                  <p><span>30,000</span>원</p>
                </li>
              </WarmList>
            </SwiperSlide>
            <SwiperSlide>
              <WarmList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw856e9a59/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Casablanca_Satin_GLBL_B_square_0607845029205.jpg?sw=856&sh=750&sm=fit' alt='오리지널 립스틱-카사블랑카' /></a>
                  </div>
                  <div className='contents'>
                    <h3>오리지널 립스틱</h3>
                    <span>카사블랑카</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwf16c17e3/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Tolede_Satin_GLBL_B_square_0607845029137.jpg?sw=856&sh=750&sm=fit' alt='립스틱-톨레도' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>톨레도</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw5471c7eb/hi-res/0607845053095.jpg?sw=856&sh=750&sm=fit' alt='싱글 아이섀도우-네팔' /></a>
                  </div>
                  <div className='contents'>
                    <h3>싱글 아이섀도우</h3>
                    <span>네팔</span>
                  </div>
                  <p><span>30,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw2b1b929c/hi-res/0607845053217.jpg?sw=856&sh=750&sm=fit' alt='싱글 아이섀도우-라호르' /></a>
                  </div>
                  <div className='contents'>
                    <h3>싱글 아이섀도우</h3>
                    <span>라호르</span>
                  </div>
                  <p><span>30,000</span>원</p>
                </li>
              </WarmList>
            </SwiperSlide>
            <Prevbtn><SlidePrevButton /></Prevbtn>
            <Nextbtn><SlideNextButton /></Nextbtn>
          </Swiper>
        </div>
      </Warm>
    </div>
  )
}

export default WarmProduct