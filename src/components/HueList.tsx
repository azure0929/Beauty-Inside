import GlobalStyle from '../styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/effect-fade'

const HueList = () => {

  const Hue = styled.div`
    margin-top: 180px;
    > div.inner {
      position: relative;
      width: calc(100% - 500px);
      margin: 0 auto;
      > h1 {
        font-family: 'Noto Sans KR';
        font-size: 32px;
        letter-spacing: .05em;
        font-weight: 500;
        margin-bottom: 40px;
      }
      > div.tabmenu {
        margin-bottom: 60px;
        > ul {
          display: flex;
          gap: 20px;
        }
        > ul.tone {
          margin-bottom: 26px;
          > li {
            padding: 10px 50px;
            border-radius: 30px;
            &:first-child {
              font-family: 'Noto Sans KR';
              font-size: 24px;
              letter-spacing: -.05em;
              background-color: #ffa9be;
              > a {
                color: #fff;
              }
            }
            &:last-child {
              font-family: 'Noto Sans KR';
              font-size: 24px;
              background-color: #f3f3f3;
              > a {
                color: #8e8e8e;
              }
            }
          }
        }
        > ul.cool {
          > li {
            padding: 10px 40px;
            border-radius: 30px;
            font-family: 'Noto Sans KR';
            font-size: 18px;
            &:first-child {
              letter-spacing: .05em;
              background-color: #191919;
              > a {
                color: #fff;
              }
            }
            &:last-child {
              background-color: #f3f3f3;
              > a {
                color: #8e8e8e;
              }
            }
          }
        }
      }
    }
  `

  const HueList = styled.ul`
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
      <Hue>
        <div className="inner">
          <h1>색조</h1>
          <div className='tabmenu'>
            <ul className='tone'>
              <li><a href='javascript:void(0)'>쿨톤</a></li>
              <li><a href='javascript:void(0)'>웜톤</a></li>
            </ul>
            <ul className='cool'>
              <li><a href='javascript:void(0)'>여름</a></li>
              <li><a href='javascript:void(0)'>겨울</a></li>
            </ul>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <HueList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw8f48591b/hi-res/0607845053347.jpg?sw=856&sh=750&sm=fit' alt='하드와이어드 아이섀도우' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하드와이어드 아이섀도우</h3>
                    <span>멜로즈</span>
                  </div>
                  <p><span>32,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw638bf00a/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Roman_Holliday_Sheer_GLBL_B_square_0607845029489.jpg?sw=856&sh=750&sm=fit' alt='립스틱' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>로만 홀리데이</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwe698e13a/hi-res/0607845053101.jpg?sw=856&sh=750&sm=fit' alt='싱글 아이섀도우' /></a>
                  </div>
                  <div className='contents'>
                    <h3>싱글 아이섀도우</h3>
                    <span>카보 산 루카스</span>
                  </div>
                  <p><span>30,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwf16c17e3/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Tolede_Satin_GLBL_B_square_0607845029137.jpg?sw=856&sh=750&sm=fit' alt='립스틱' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>톨레도</span>
                  </div>
                  <p><span>44,000</span>원</p>
                </li>
              </HueList>
            </SwiperSlide>
            <SwiperSlide>
              <HueList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa1030bd6/hi-res/0607845053422.jpg?sw=856&sh=750&sm=fit' alt='하드와이어드 아이섀도우-얼쓰샤인' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하드와이어드 아이섀도우</h3>
                    <span>얼쓰샤인</span>
                  </div>
                  <p><span>32,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbac184f2/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Catfight_Matte_GLBL_B_square_0607845029717.jpg?sw=856&sh=750&sm=fit' alt='립스틱-캣파이트' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>캣파이트</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw8f736413/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Instant_Crush_Sheer_GLBL_B_square_0607845029557.jpg?sw=856&sh=750&sm=fit' alt='립스틱-인스턴트 크러쉬' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>인스턴트 크러쉬</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw12b9b591/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Hot_Kiss_Matte_GLBL_B_square_0607845029854.jpg?sw=856&sh=750&sm=fit' alt='립스틱-핫 키스' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>핫 키스</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
              </HueList>
            </SwiperSlide>
            <Prevbtn><SlidePrevButton /></Prevbtn>
            <Nextbtn><SlideNextButton /></Nextbtn>
          </Swiper>
        </div>
      </Hue>
    </div>
  )
}

export default HueList