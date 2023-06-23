import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles'

export const Payment = () => {
  return (
    <>
      <GlobalStyle />
      <PaymentWrap>
        <Title>주문서</Title>
        <Inner>
          <p className="inner-title">주문상품 1개</p>
          <OrderItem>
            <ImageBox>
              <img src="" alt="" />
            </ImageBox>
            <Info>
              <p className="item-title">애프터 글로우 립 샤인</p>
              <p className="item-name">
                러버 투 러버 <span className="item-number">/ 1개</span>
              </p>
              <p className="item-price">32,000원</p>
            </Info>
          </OrderItem>
        </Inner>
        <Inner>
          <p className="inner-title">주문자 정보</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">주문자 이름</p>
              <p>guest1</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">주문자 이메일</p>
              <p>guest1@email.com</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <Inner className="inner-select">
          <p className="inner-title">결제 수단</p>
          <Select></Select>
        </Inner>
        <Inner>
          <p className="inner-title">결제 금액</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">총 주문 금액</p>
              <p>guest1@email.com</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">배송비</p>
              <p>guest1@email.com</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">총 결제 금액</p>
              <p>guest1@email.com</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <PaymentButton>총 88,500원 결제하기</PaymentButton>
      </PaymentWrap>
    </>
  )
}

const PaymentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 152px;
`
const Title = styled.p`
  font-size: 26px;
`
const Inner = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  border-bottom: 1px solid #8e8e8e;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 40px;
  .inner-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &.inner-select {
    flex-direction: row;
    gap: 60px;
  }
  &:nth-child(5) {
    border: none;
  }
`
const OrderItem = styled.div`
  width: 1100px;
  display: flex;
  gap: 20px;
`
const ImageBox = styled.div`
  img {
    width: 120px;
    height: 120px;
  }
`

const Info = styled.div`
  .item-title {
    font-size: 20px;
  }
  .item-name {
    font-size: 16px;
    color: #8e8e8e;
  }
  .item-price {
    font-size: 20px;
    margin-top: 20px;
  }
`

const Infowrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InnerInfo = styled.div`
  display: flex;
  .info-label {
    width: 140px;
  }
`

const Select = styled.select`
  width: 340px;
  height: 46px;f
`

const PaymentButton = styled.button`
  width: 305px;
  height: 50px;
  background-color: #ffa9be;
  font-size: 18px;
  color: #fff;
  border-radius: 6px;
  margin-top: 120px;
`
