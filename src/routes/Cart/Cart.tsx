import GlobalStyle from '../../styles/GlobalStyles'
import styled from 'styled-components'

const Cart = () => {

  const Section = styled.div`
    margin-top: 152px;
    > div.inner {
      width: calc(100% - 500px);
      margin: 0 auto;
      > div.title {
        text-align: center;
        font-family: 'Noto Sans KR';
        > h2 {
          font-size: 26px;
          letter-spacing: -.05em;
          font-weight: 500;
          margin-bottom: 12px;
        }
        > p {
          font-size: 20px;
          letter-spacing: -.05em;
          color: #8e8e8e;
          > span {
            color: #ffa9be;
          }
        }
      }
    }
  `

  const Contents = styled.div`
    margin-top: 212px;
    > h1 {
      font-family: 'Noto Sans KR';
      font-size: 30px;
      letter-spacing: -.05em;
      text-align: center;
      color: #ffa9be;
    }
  `

  return (
    <div>
      <GlobalStyle />
      <Section>
        <div className='inner'>
          <div className='title'>
            <h2>장바구니</h2>
            <p><span>뷰티인사이드</span>의 다양한 서비스와 퍼스널 진단을 누리세요.</p>
          </div>
          <Contents>
            <h1>장바구니가 비었습니다</h1>
          </Contents>
        </div>
      </Section>
    </div>
  )
}

export default Cart
