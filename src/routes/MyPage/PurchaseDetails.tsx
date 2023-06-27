import { styled } from 'styled-components'
import { PageHeader } from '../../components/mypage/PageHeader'

export const PurchaseDetails = () => {
  const mockdata = {
    detailId: 'dMhfxyrAupQP18OYmywy',
    account: {
      bankName: 'KB국민은행',
      bankCode: '004',
      accountNumber: '123-XX-XXXX-XXX',
    },
    product: {
      productId: 'cFmeC7aY5KjZbBAdJE9y',
      title: '삼성전자 스마트모니터 M7 S43AM700-화이트',
      price: 639000,
      description:
        '107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,000:1 / 최대 주사율: 60Hz / HDMI 2.0 / USB Type-C / 플리커 프리 / 블루라이트 차단 / 게임모드 지원 / 스피커 / 리모컨 / USB허브 / Wi-Fi(무선) / 스마트TV / 블루투스 / 틸트(상하) / 200 x 200mm / HDR / HDR10 / 10.6kg 기획전 차세대 게임 라이프 PS5 매력분석 관련기사 큐소닉, 43인치 4K UHD 스마트 모니터 ‘삼성전자 M7 S43AM700’ 출시 및 할인 행사 사용기 삼성 스마트모니터 m7 s43am700',
      tags: ['가전', '모니터', '컴퓨터'],
      thumbnail: 'https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png',
      photo: 'https://storage.googleapis.com/heropy-api/vVLP-ox_zSDv195712.jpg',
      discountRate: 0,
    },
    reservation: null,
    timePaid: '2021-11-07T20:01:49.100Z',
    isCanceled: false,
    done: true,
  }

  return (
    <Wrap>
      <PageHeader title="구매 내역 상세 정보" />
      <Inner>
        <ImageBox>
          <img src="" alt="" />
        </ImageBox>
        <DataWrap className="product">
          <p>상품 정보</p>
          <Info>
            <span>분류</span>
            <span className="info">{mockdata.product.title.split('-')[0]}</span>
          </Info>
          <Info>
            <span>제품명/개수</span>
            <span className="info">{mockdata.product.title.split('-')[1]} / 1개</span>
          </Info>
          <Info>
            <span>가격</span>
            <span className="info">{mockdata.product.price.toLocaleString('ko-KR')}원</span>
          </Info>
        </DataWrap>
        <DataWrap className="purchase">
          <p>거래 정보</p>
          <Info>
            <span>구매 일자</span>
            <span className="info">{mockdata.timePaid.slice(0, 10)}</span>
          </Info>
          <Info>
            <span>거래 은행</span>
            <span className="info">{mockdata.account.bankName}</span>
          </Info>
          <Info>
            <span>거래 계좌 번호</span>
            <span className="info">{mockdata.account.accountNumber}</span>
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
