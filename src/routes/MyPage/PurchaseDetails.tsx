import { styled } from 'styled-components'
import { PageHeader } from '../../components/mypage/PageHeader'
import { getPurchaseDetail } from '../../apis/api'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'

export const PurchaseDetails = () => {
  const [dataLoading, setdataLoading] = useState(false)
  const [purchaseDetails, setpurchaseDetails] = useState([])
  const [purchaseProduct, setpurchaseProduct] = useState([])
  const [purchaseAccount, setpurchaseAccount] = useState([])

  const location = useLocation()
  const id = location.state.id

  useEffect(() => {
    ;(async () => {
      try {
        setdataLoading(true)
        const data = await getPurchaseDetail(id)
        setpurchaseDetails(data)
        setpurchaseProduct(data.product)
        setpurchaseAccount(data.account)
      } catch (error) {
        setdataLoading(false)
        console.error('Error fetching purchase list:', error)
      } finally {
        setdataLoading(false)
      }
    })()
  }, [])

  return (
    <Wrap>
      <PageHeader title="구매 내역 상세 정보" />
      <Inner>
        <ImageBox>
          <img src={purchaseProduct.thumbnail} alt="" />
        </ImageBox>
        <DataWrap className="product">
          <p>상품 정보</p>
          <Info>
            <span>분류</span>
            <span className="info">{(purchaseProduct.title || '').split('-')[0]}</span>
          </Info>
          <Info>
            <span>제품명/개수</span>
            <span className="info">{(purchaseProduct.title || '').split('-')[1]} / 1개</span>
          </Info>
          <Info>
            <span>가격</span>
            <span className="info">{(purchaseProduct.price || '').toLocaleString('ko-KR')}원</span>
          </Info>
        </DataWrap>
        <DataWrap className="purchase">
          <p>거래 정보</p>
          <Info>
            <span>구매 일자</span>
            <span className="info">{(purchaseDetails.timePaid || '').slice(0, 10)}</span>
          </Info>
          <Info>
            <span>거래 은행</span>
            <span className="info">{purchaseAccount.bankName}</span>
          </Info>
          <Info>
            <span>거래 계좌 번호</span>
            <span className="info">{purchaseAccount.accountNumber}</span>
          </Info>
        </DataWrap>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DataWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    margin-top: 20px;
    border-bottom: 1px solid #dedede;
    font-size: 20px;
    color: #ffa9be;
  }
  &.purchase {
    margin-top: 40px;
  }
  &.product {
    margin-top: 40px;
  }
`

const ImageBox = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #8e8e8e;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`

const Info = styled.div`
  display: flex;
  span {
    font-size: 20px;
    width: 200px;
  }
  .info {
    width: 100%;
  }
`
