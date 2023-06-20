import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper'
import SlideNextButton from './SlideNextButton'
import SlidePrevButton from './SlidePrevButton'

const MainBest = () => {

  const MainBest = styled.div`
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

  const BestList = styled.ul`
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
      <MainBest>
        <div className="inner">
          <h1>BEST</h1>
          <Swiper
            modules={[Autoplay, Navigation ]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <BestList>
                <li>
                  <div className='thumbnail'>
                    <a href='/ProductDetail'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwd84a46eb/hi-res/NARS_SU20_AirMatteLipColor_PDPCrop_PDPCrop_Soldier_Pinup_GLBL_2400x2400_B.jpg?sw=856&sh=750&sm=fit' alt='에어 매트 립 컬러' /></a>
                  </div>
                  <div className='contents'>
                    <h3>에어 매트 립 컬러</h3>
                    <span>15 SHADES</span>
                  </div>
                  <p><span>40,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw4b97993b/hi-res/0607845040132.jpg?sw=856&sh=750&sm=fit' alt='블러쉬' /></a>
                  </div>
                  <div className='contents'>
                    <h3>블러쉬</h3>
                    <span>26 SHADES</span>
                  </div>
                  <p><span>45,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw22f14e4c/hi-res/NARS_SP21_PRPAGC_PDPCrop_Soldier_VIENNA_GLBL_2400x2400.jpg?sw=856&sh=750&sm=fit' alt='퓨어 래디언트 프로텍션 아쿠아 글로우 쿠션 파운데이션 SPF23/PA++' /></a>
                  </div>
                  <div className='contents'>
                    <h3>퓨어 래디언트 프로텍션 아쿠아 <br /> 글로우 쿠션 파운데이션 SPF23/PA++</h3>
                    <span>6 SHADES</span>
                  </div>
                  <p><span>74,000</span>원</p>
                </li>
                <li>
                  <div className='thumbnail'>
                    <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw3937c04b/0607845012320.jpg?sw=856&sh=750&sm=fit' alt='래디언트 크리미 컨실러' /></a>
                  </div>
                  <div className='contents'>
                    <h3>래디언트 크리미 컨실러</h3>
                    <span>14 SHADES</span>
                  </div>
                  <p><span>44,000</span>원</p>
                </li>
              </BestList>
            </SwiperSlide>
            <SwiperSlide>
              <BestList>
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
              </BestList>
            </SwiperSlide>
            <Prevbtn><SlidePrevButton /></Prevbtn>
            <Nextbtn><SlideNextButton /></Nextbtn>
          </Swiper>
        </div>
      </MainBest>
    </div>
  )
}

export default MainBest