import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'
import Banner from '../components/Banner'
import MainBest from '../components/MainBest'
import NewList from '../components/NewList'
import HueList from '../components/HueList'

const Main = () => {

  const SummerMakeup = styled.div`
  margin-top: 180px;
  > div.inner {
      width: calc(100% - 480px);
      margin: 0 auto;
      display: flex;
      > div.contents {
        width: 552px;
        > h1 {
          font-family: 'Noto Sans KR';
          font-size: 60px;
          letter-spacing: -.05em;
          font-weight: 700;
          margin-bottom: 86px;
        }
        > h4 {
          font-family: 'Noto Sans KR';
          font-size: 20px;
          letter-spacing: -.05em;
          margin-bottom: 12px;
        }
        > h2 {
          font-family: 'Noto Sans KR';
          font-size: 32px;
          font-weight: 500;
        }
        > ul.makeup-detail {
          margin-top: 134px;
          display: flex;
          > li {
            margin-right: 36px;
            &:last-child {
              margin-right: 0px;
            }
            > div {
              width: 160px;
              > a {
                > img {
                  width: 100%;
                  display: block;
                  object-fit: cover;
                }
              }
            }
            > div.makeup-contents {
              > h3 {
                font-family: 'Noto Sans KR';
                font-size: 14px;
                letter-spacing: -.05em;
                font-weight: 500;
                margin-bottom: 4px;
              }
              > span {
                display: block;
                font-family: 'Spoqa Han Sans Neo';
                font-size: 10px;
                color: #8e8e8e;
              }
            }
          }
        }
      }
      > div.thumbnail {
        width: 620px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        > img {
          width: 100%;
          display: block;
          object-fit: cover;
        }
      }
    }
  `

  const Span = styled.span`
    font-family: 'Noto Sans KR';
    letter-spacing: -.05em;
  `

  const Thumbnail = styled.div`
    margin-top: 180px;
    > img {
      width: 100%;
      display: block;
      object-fit: cover;
    }
  `

  return (
    <div>
      <GlobalStyle />
      <Banner />
      <MainBest />
      <SummerMakeup>
        <div className='inner'>
          <div className='contents'>
            <h1>여름철<br />그날의 메이크업</h1>
            <h4>단 한 번의 터치</h4>
            <h2>모두의 시선을 사로잡다</h2>
            <ul className='makeup-detail'>
              <li>
                <div className='makeup-thumbnail'>
                  <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw9ea1e5c2/hi-res/NARS_HO21_Holiday_PDPCrop_Soldier_UnwrappedMiniESPalette_Orgasm_GLBL_2000x2000.jpg?sw=255&sh=255&sm=fit' alt='언랩트 미니 아이섀도우 팔레트 오르가즘' /></a>
                </div>
                <div className='makeup-contents'>
                  <h3>언랩트 미니 아이섀도우 <br /> 팔레트 오르가즘</h3>
                  <span>15 SHADES</span>
                </div>
              </li>
              <li>
                <div className='makeup-thumbnail'>
                  <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw8f48591b/hi-res/0607845053347.jpg?sw=856&sh=750&sm=fit' alt='' /></a>
                </div>
                <div className='makeup-contents'>
                  <h3>하드와이어드 아이섀도우</h3>
                  <Span>멜로즈</Span>
                </div>
              </li>
              <li>
                <div className='makeup-thumbnail'>
                  <a href='javascript:void(0)'><img src='https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw638bf00a/hi-res/NARS_FA19_Lipstick_Soldier_LPS_Roman_Holliday_Sheer_GLBL_B_square_0607845029489.jpg?sw=856&sh=750&sm=fit' alt='' /></a>
                </div>
                <div className='makeup-contents'>
                  <h3>립스틱</h3>
                  <Span>로만 홀리데이</Span>
                </div>
              </li>
            </ul>
          </div>
          <div className='thumbnail'>
            <img src='assets/main/summermakeup/sm-thumbnail.jpg' alt='summermakeup-thumbnail' />
          </div>
        </div>
      </SummerMakeup>
      <NewList />
      <Thumbnail>
        <img src='assets/main/thumbnail.jpg' alt='thumbnail' />
      </Thumbnail>
      <HueList />
    </div>
  )
}

export default Main
