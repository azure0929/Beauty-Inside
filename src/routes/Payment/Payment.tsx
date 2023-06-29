import styled from 'styled-components'
import GlobalStyle from '../../styles/GlobalStyles'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { authVerification, getUserAccounts, requestBuy } from '../../apis/api'

export const Payment = () => {
  let total = 0
  let productTotal = 0
  const DELIVERY_CHARGE = 2500

  const items = [
    {
      id: 'i3yOg0gUQXpVb6n5Yah6',
      name: '오리지널립스틱-히트웨이브',
      src: '',
      price: 40000,
    },
    {
      id: 'KuVFr4I445aq3zjQoE4M',
      name: '하드와이어드아이섀도우-멜로즈',
      src: '',
      price: 40000,
    },
    {
      id: 'wbzDFBshCidi0naEotyK',
      name: '립스틱-첼시걸스',
      src: '',
      price: 40000,
    },
  ]
  items.map((item) => (productTotal = item.price + productTotal))
  total = productTotal + DELIVERY_CHARGE

  const [userInfo, setuserInfo] = useState([])
  const [userAccounts, setuserAccounts] = useState([])
  //const [selectedAccount, setselectedAccount] = useState('')
  const [accountId, setAccountId] = useState('')
  // navigate
  const navigate = useNavigate()

  //계좌 선택
  const handleChangeSelect = (e) => {
    setAccountId(e.target.value)
  }

  const requestAllBuy = async () => {
    const list = items.map((item) => item.id)

    if (accountId === '' || accountId === '계좌 선택') {
      alert('결제수단을 선택해주세요')
    } else {
      const results = await Promise.all(
        list.map((productId) => requestBuy({ productId, accountId })),
      )
    }
  }

  //결제완료
  const handleClickPayment = () => {
    requestAllBuy()
    //navigate('/PaymentCompleted')
  }

  useEffect(() => {
    ;(async () => {
      try {
        const account = await getUserAccounts()
        const data = await authVerification()
        setuserInfo(data)
        setuserAccounts(account.accounts)
      } catch (error) {
        console.error('Error fetching:', error)
      }
    })()
  }, [])

  return (
    <>
      <GlobalStyle />
      <PaymentWrap>
        <Title>주문서</Title>
        <Inner>
          <p className="inner-title">주문상품 {items.length}개</p>
          {items.map((item, index) => (
            <OrderItem key={index}>
              <ImageBox>
                <img src={item.src} alt="" />
              </ImageBox>
              <Info>
                <p className="item-title">{item.name.split('-')[0]}</p>
                <p className="item-name">
                  {item.name.split('-')[1]} <span className="item-number">/ 1개</span>
                </p>
                <p className="item-price">{item.price.toLocaleString('ko-KR')}원</p>
              </Info>
            </OrderItem>
          ))}
        </Inner>
        <Inner>
          <p className="inner-title">주문자 정보</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">주문자 이름</p>
              <p>{userInfo.displayName}</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">주문자 이메일</p>
              <p>{userInfo.email}</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <Inner className="inner-select">
          <p className="inner-title">결제 수단</p>
          <Select onChange={(e) => handleChangeSelect(e)}>
            <option>계좌 선택</option>
            {userAccounts.map((account, index) => (
              <option key={index} value={account.id}>
                {account.bankName} {account.accountNumber}
              </option>
            ))}
          </Select>
        </Inner>
        <Inner>
          <p className="inner-title">결제 금액</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">총 주문 금액</p>
              <p>{productTotal.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">배송비</p>
              <p>{DELIVERY_CHARGE.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">총 결제 금액</p>
              <p>{total.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <PaymentButton onClick={handleClickPayment}>
          총 {total.toLocaleString('ko-KR')}원 결제하기
        </PaymentButton>
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
