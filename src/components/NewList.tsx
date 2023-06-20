import GlobalStyle from '../styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/effect-fade'

const NewList = () => {

  const New = styled.div`
    margin-top: 180px;
    > div.inner {
      position: relative;
      width: calc(100% - 500px);
      margin: 0 auto;
      > h1 {
        font-family: 'Spoqa Han Sans Neo';
        font-size: 32px;
        font-weight: 500;
      }
    }
  `

  const NewList = styled.ul`
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
          font-family: 'Spoqa Han Sans Neo';
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
      <New>
        <div className="inner">
          <h1>NEW</h1>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <NewList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwb84ad732/NARS_SU23_PureParadiseCollection_PDPCrop_Soldier_CRTN_NRLFC_Case_Asia_EMEA_B_2000x2000.jpg?sw=856&sh=750&sm=fit' alt='네츄럴 래디언트 롱웨어 쿠션 파운데이션 케이스' /></a>
                  </div>
                  <div className='contents'>
                    <h3>네츄럴 래디언트 롱웨어 쿠션 파운데이션 케이스</h3>
                  </div>
                  <p><span>74,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwedd0d55b/NARS_SU23_PureParadiseCollection_PDPCrop_Soldier_Blush_Orgasm_Open_Asia_B.jpg?sw=856&sh=750&sm=fit' alt='라이트 리플렉팅 블러쉬' /></a>
                  </div>
                  <div className='contents'>
                    <h3>라이트 리플렉팅 블러쉬</h3>
                  </div>
                  <p><span>68,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwdebcefde/hi-res/NARS_SU23_PureParadiseCollection_PDPCrop_Soldier_Quad_EyeshadowPalette_Open_Asia_B.jpg?sw=856&sh=750&sm=fit' alt='라이트 리플렉팅 쿼드 아이섀도우' /></a>
                  </div>
                  <div className='contents'>
                    <h3>라이트 리플렉팅 쿼드 아이섀도우</h3>
                  </div>
                  <p><span>68,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw8bbd5316/NARS_SU23_PureParadiseCollection_PDPCrop_Soldier_PMLS_Shade1_Open_GLBL_B.jpg?sw=856&sh=750&sm=fit' alt='파워매트 립스틱' /></a>
                  </div>
                  <div className='contents'>
                    <h3>파워매트 립스틱</h3>
                  </div>
                  <p><span>45,000</span>원</p>
                </li>
              </NewList>
            </SwiperSlide>
            <SwiperSlide>
              <NewList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw139f8488/hi-res/0607845024880.jpg?sw=856&sh=750&sm=fit' alt='벨벳 매트 립 펜슬' /></a>
                  </div>
                  <div className='contents'>
                    <h3>벨벳 매트 립 펜슬</h3>
                    <span>27 SHADES</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbe01178d/hi-res/NARS_SP22_LightReflectingFoundation_PDPCrop_Soldier07_DEAUVILLE_GLBL_2400x2400_B.jpg?sw=856&sh=750&sm=fit' alt='라이트 리플렉팅 파운데이션' /></a>
                  </div>
                  <div className='contents'>
                    <h3>라이트 리플렉팅 파운데이션</h3>
                    <span>20 SHADES</span>
                  </div>
                  <p><span>76,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbc7bfadb/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Afghan_Red_Satin_GLBL_B_square_0607845029113.jpg?sw=856&sh=750&sm=fit' alt='립스틱' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>42 SHADES</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw29f65ad4/1027/SEOUL.jpg?sw=856&sh=750&sm=fit' alt='네츄럴 래디언트 롱웨어 쿠션 파운데이션 SPF50/PA+++ 싱글 패키지' /></a>
                  </div>
                  <div className='contents'>
                    <h3>네츄럴 래디언트 롱웨어 쿠션 파운데이션 SPF50/PA+++ 싱글 패키지</h3>
                    <span>6 SHADES</span>
                  </div>
                  <p><span>44,000</span>원</p>
                </li>
              </NewList>
            </SwiperSlide>
            <Prevbtn><SlidePrevButton /></Prevbtn>
            <Nextbtn><SlideNextButton /></Nextbtn>
          </Swiper>
        </div>
      </New>
    </div>
  )
}

export default NewList