import { useNavigate } from 'react-router-dom'
import GlobalStyle from '../../styles/GlobalStyles'
import styled from 'styled-components'

const CartPurchase = () => {
  const Section = styled.div`
    margin-top: 152px;
    margin-bottom: 60px;
    &:last-child {
      border-top: 10px solid #eaeaea;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 60px 0;
    }
    > div.inner {
      width: calc(100% - 500px);
      margin: 0 auto;
      > div.title {
        text-align: center;
        > h2 {
          font-family: 'Noto Sans KR';
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.05em;
          margin-bottom: 12px;
        }
        > p {
          font-family: 'Noto Sans KR';
          font-size: 20px;
          letter-spacing: -0.05em;
          color: #8e8e8e;
          > span {
            color: #ffa9be;
          }
        }
      }
    }
  `

  const Product = styled.div`
    margin-top: 56px;
    > div.product {
      > h2 {
        font-family: 'Noto Sans KR';
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.05em;
        margin-bottom: 32px;
      }
      > ul.product-list {
        margin-bottom: 94px;
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
              letter-spacing: -0.05em;
              margin-bottom: 4px;
            }
            > span {
              display: block;
              font-family: 'Spoqa Han Sans Neo';
              font-size: 14px;
              color: #8e8e8e;
            }
          }
          > p {
            font-family: 'Noto Sans KR';
            letter-spacing: -0.05em;
            text-align: right;
            font-size: 14px;
            > span {
              font-family: 'Spoqa Han Sans Neo';
              font-size: 18px;
              font-weight: 700;
            }
          }
        }
      }
      > div.price {
        margin-bottom: 38px;
        > p {
          font-family: 'Noto Sans KR';
          font-size: 26px;
          text-align: right;
          > span {
            font-family: 'Spoqa Han Sans Neo';
            font-weight: 500;
          }
        }
      }
      > div.link {
        font-family: 'Noto Sans KR';
        font-size: 18px;
        letter-spacing: -0.05em;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        > a {
          display: block;
          width: 304px;
          height: 50px;
          text-align: center;
          padding: 10px 94px;
          border-radius: 6px;
          margin-right: 20px;
          border: 1px solid #8e8e8e;
          transition: 0.2s;
          &:hover {
            border-color: transparent;
            background-color: #ffa9be;
            color: #fff;
          }
          &:last-child {
            margin-right: 0px;
            background-color: #ffa9be;
            color: #fff;
            border-color: transparent;
          }
        }
      }
    }
  `

  const Purchase = styled.div`
    > h2 {
      font-family: 'Noto Sans KR';
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.05em;
      margin-bottom: 112px;
    }
    > div.total {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 40px;
      > div.price {
        width: 304px;
        > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-family: 'Noto Sans KR';
          font-size: 20px;
          letter-spacing: -0.05em;
          > h3 {
            font-weight: 500;
          }
          > p {
            > span {
              font-family: 'Spoqa Han Sans Neo';
              letter-spacing: 0;
              font-weight: 500;
            }
          }
        }
      }
    }
    > div.link {
      height: 50px;
      display: flex;
      justify-content: flex-end;
    }
  `

  const Button = styled.button`
    font-family: 'Noto Sans KR';
    font-size: 18px;
    letter-spacing: -0.05em;
    display: block;
    width: 304px;
    height: 50px;
    text-align: center;
    border-radius: 6px;
    padding: 10px 0;
    margin-right: 20px;
    border: 1px solid #8e8e8e;
    transition: 0.2s;
    &:hover {
      border-color: transparent;
      background-color: #ffa9be;
      color: #fff;
    }
    &:last-child {
      margin-right: 0px;
    }
    > span {
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 500;
    }
  `

  // navigate
  const navigate = useNavigate()

  // 메인으로 이동
  const navigateToMain = () => {
    navigate('/')
  }
  // 주문서로 이동
  const navigateToPayment = () => {
    navigate('/Payment')
  }
  return (
    <div>
      <GlobalStyle />
      <Section>
        <div className="inner">
          <div className="title">
            <h2>장바구니</h2>
            <p>
              <span>뷰티인사이드</span>의 다양한 서비스와 퍼스널 진단을 누리세요.
            </p>
          </div>
          <Product>
            <div className="product">
              <h2>상품</h2>
              <ul className="product-list">
                <li>
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img
                        src="https://www.narscosmetics.co.kr/dw/image/v2/BCSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwb9c9f650/hi-res/0607845039211.jpg?sw=856&sh=750&sm=fit"
                        alt="듀오 아이섀도우-알함브라"
                      />
                    </a>
                  </div>
                  <div className="contents">
                    <h3>듀오 아이섀도우</h3>
                    <span>앎함브라</span>
                  </div>
                </li>
              </ul>
              <div className="price">
                <p>
                  <span>49,000</span>원
                </p>
              </div>
              <div className="link">
                <Button onClick={navigateToMain}>쇼핑 계속하기</Button>
                <Button>구매하기</Button>
              </div>
            </div>
          </Product>
        </div>
      </Section>
      <Section>
        <div className="inner">
          <Purchase>
            <h2>결제 예상 금액</h2>
            <div className="total">
              <div className="price">
                <div>
                  <h3>총 상품금액</h3>
                  <p>
                    <span>49,000</span>원
                  </p>
                </div>
                <div>
                  <h3>총 할인금액</h3>
                  <p>
                    <span>0</span>원
                  </p>
                </div>
                <div>
                  <h3>총 배송비</h3>
                  <p>
                    <span>2,500</span>원
                  </p>
                </div>
              </div>
            </div>
            <div className="link">
              <Button onClick={navigateToPayment}>
                총 <span>51,500</span>원 구매
              </Button>
            </div>
          </Purchase>
        </div>
      </Section>
    </div>
  )
}

export default CartPurchase
