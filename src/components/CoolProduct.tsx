import GlobalStyle from '../styles/GlobalStyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/effect-fade'

const CoolProduct = () => {

  const Cool = styled.div`
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

  const CoolList = styled.ul`
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
      <Cool>
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
              <CoolList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw8f48591b/hi-res/0607845053347.jpg?sw=856&sh=750&sm=fit' alt='하드와이어드 아이섀도우-멜로즈' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하드와이어드 아이섀도우</h3>
                    <span>멜로즈</span>
                  </div>
                  <p><span>32,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw638bf00a/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Roman_Holliday_Sheer_GLBL_B_square_0607845029489.jpg?sw=856&sh=750&sm=fit' alt='립스틱-로만 홀리데이' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>로만 홀리데이</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwe698e13a/hi-res/0607845053101.jpg?sw=856&sh=750&sm=fit' alt='싱글 아이섀도우-카보 산 루카스' /></a>
                  </div>
                  <div className='contents'>
                    <h3>싱글 아이섀도우</h3>
                    <span>카보 산 루카스</span>
                  </div>
                  <p><span>30,000</span>원</p>
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
              </CoolList>
            </SwiperSlide>
            <SwiperSlide>
              <CoolList>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw2a7d68cf/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Red_Lizard_Matte_GLBL_B_square_0607845029632.jpg?sw=856&sh=750&sm=fit' alt='오리지널 립스틱-레드 리자드' /></a>
                  </div>
                  <div className='contents'>
                    <h3>오리지널 립스틱</h3>
                    <span>레드 리자드</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw34453553/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Impulse_Satin_GLBL_B_square_0607845029298.jpg?sw=856&sh=750&sm=fit' alt='립스틱-임펄스' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>임펄스</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwf0f20c62/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Trans_Siberian_Matte_GLBL_B_square_0607845029656.jpg?sw=856&sh=750&sm=fit' alt='오리지널 립스틱-트랜스 시베리안' /></a>
                  </div>
                  <div className='contents'>
                    <h3>오리지널 립스틱</h3>
                    <span>트랜스 시베리안</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa5506e71/hi-res/0607845053446.jpg?sw=856&sh=750&sm=fit' alt='립스틱' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하으와이어드 아이섀도우</h3>
                    <span>피렌체</span>
                  </div>
                  <p><span>32,000</span>원</p>
                </li>
              </CoolList>
            </SwiperSlide>
            <Prevbtn><SlidePrevButton /></Prevbtn>
            <Nextbtn><SlideNextButton /></Nextbtn>
          </Swiper>
        </div>
      </Cool>
    </div>
  )
}

export default CoolProduct