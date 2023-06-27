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
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwc2bb73af/hi-res/0607845053392.jpg?sw=856&sh=750&sm=fit' alt='하드와이어드 아이섀도우-멘도자' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하드와이어드 아이섀도우</h3>
                    <span>멘도자</span>
                  </div>
                  <p><span>32,000</span>원</p>
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
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbac184f2/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Catfight_Matte_GLBL_B_square_0607845029717.jpg?sw=856&sh=750&sm=fit' alt='립스틱-캣파이트' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>캣파이트</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
              </NewList>
            </SwiperSlide>
            <SwiperSlide>
              <NewList>
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
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwcb3182c7/hi-res/0607845039709.jpg?sw=856&sh=750&sm=fit' alt='쿼드 아이섀도우-모하비' /></a>
                  </div>
                  <div className='contents'>
                    <h3>쿼드 아이섀도우</h3>
                    <span>모하비</span>
                  </div>
                  <p><span>68,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw94bc3a5f/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Bulgarian_Rose_Sheer_GLBL_B_square_0607845029571.jpg?sw=856&sh=750&sm=fit' alt='립스틱-불가리안 로즈' /></a>
                  </div>
                  <div className='contents'>
                    <h3>립스틱</h3>
                    <span>불가리안 로즈</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa5506e71/hi-res/0607845053446.jpg?sw=856&sh=750&sm=fit' alt='하드와이어드 아이섀도우-피렌체' /></a>
                  </div>
                  <div className='contents'>
                    <h3>하드와이어드 아이섀도우</h3>
                    <span>피렌체</span>
                  </div>
                  <p><span>32,000</span>원</p>
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