import { useState, useEffect } from 'react'
import { ListPagination } from '../../components/mypage/ListPagination'
import { PageHeader } from '../../components/mypage/PageHeader'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getPurchaselist } from '../../apis/api'
import { LoadingSpinner } from '../../components/common/LoadingSpinner'

export const PurchaseList = () => {
  const navigate = useNavigate()
  const mockdata = [
    {
      detailId: '9jAoagzrZBkSWI5NctEB',
      product: {
        productId: 'nbqtQvEivYwEXTDet7YM',
        title: 'MacBook Pro 16-스페이스 그레이',
        price: 3360000,
        description:
          '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
        tags: ['가전', '노트북', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
        discountRate: 0,
      },
      reservation: null,
      timePaid: '2021-11-07T20:17:32.112Z',
      isCanceled: true,
      done: false,
    },
    {
      detailId: '9jAoagzrZBkSWI5NctEB',
      product: {
        productId: 'nbqtQvEivYwEXTDet7YM',
        title: 'MacBook Pro 16-로즈 골드',
        price: 3360000,
        description:
          '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
        tags: ['가전', '노트북', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
        discountRate: 0,
      },
      reservation: null,
      timePaid: '2021-11-07T20:17:32.112Z',
      isCanceled: true,
      done: false,
    },
    {
      detailId: '9jAoagzrZBkSWI5NctEB',
      product: {
        productId: 'nbqtQvEivYwEXTDet7YM',
        title: 'MacBook Pro 16-스타라이트',
        price: 3360000,
        description:
          '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
        tags: ['가전', '노트북', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
        discountRate: 0,
      },
      reservation: null,
      timePaid: '2021-11-07T20:17:32.112Z',
      isCanceled: true,
      done: false,
    },
    {
      detailId: '9jAoagzrZBkSWI5NctEB',
      product: {
        productId: 'nbqtQvEivYwEXTDet7YM',
        title: 'MacBook Pro 16-미드나이트',
        price: 3360000,
        description:
          '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
        tags: ['가전', '노트북', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
        discountRate: 0,
      },
      reservation: null,
      timePaid: '2021-11-07T20:17:32.112Z',
      isCanceled: true,
      done: false,
    },
    {
      detailId: '9jAoagzrZBkSWI5NctEB',
      product: {
        productId: 'nbqtQvEivYwEXTDet7YM',
        title: 'MacBook Pro 16-실버',
        price: 3360000,
        description:
          '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
        tags: ['가전', '노트북', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
        discountRate: 0,
      },
      reservation: null,
      timePaid: '2021-11-07T20:17:32.112Z',
      isCanceled: true,
      done: false,
    },
    {
      detailId: 'dMhfxyrAupQP18OYmywy',
      product: {
        productId: 'cFmeC7aY5KjZbBAdJE9y',
        title: '삼성전자 스마트모니터 M7 S43AM700-화이트',
        price: 639000,
        description:
          '107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,00',
        tags: ['가전', '모니터', '컴퓨터'],
        thumbnail: 'https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png',
        discountRate: 0,
      },
      reservation: {
        start: '2021-11-12T06:00:00.000Z',
        end: '2021-11-12T07:00:00.000Z',
        isCanceled: false,
        isExpired: true,
      },
      timePaid: '2021-11-07T20:01:49.100Z',
      isCanceled: false,
      done: true,
    },
  ]
  const [curPage, setCurPage] = useState(1)
  const [limitPage, setLimitPage] = useState(4) //한번에 보여질 개수
  const [dataLoading, setdataLoading] = useState(false)
  const [purchaseList, setpurchaseList] = useState([])

  const [noList, setnoList] = useState(false)

  //페이지 계산
  const lastPage = curPage * limitPage
  const firstPage = lastPage - limitPage
  const currentPages = (page) => {
    let currentPages = 0
    currentPages = page.slice(firstPage, lastPage)
    return currentPages
  }

  const handleClickMore = (id) => {
    navigate('/MyPage/PurchaseDetails', {
      state: {
        id,
      },
    })
  }

  useEffect(() => {
    ;(async () => {
      try {
        setdataLoading(true)
        const data = await getPurchaselist()
        setpurchaseList(data)
      } catch (error) {
        setdataLoading(false)
        console.error('Error fetching purchase list:', error)
        setnoList(true)
      } finally {
        setdataLoading(false)
      }
    })()
  }, [])

  return (
    <Wrap>
      {purchaseList.length === 0 ? <p>구매내역이 없습니다.</p> : ''}
      <p>구매내역이 없습니다.</p>
      {/* <PageHeader title="구매 내역" />
      {noList ? (
        <p>구매내역이 없습니다.</p>
      ) : (
        <>
          <Total>({purchaseList.length})</Total>
          <Inner>
            {currentPages(purchaseList).map((data, index) => (
              <ListItem key={index}>
                <ImageBox>
                  <img src={data.product.thumbnail} alt="" />
                </ImageBox>
                <Info>
                  <p className="title">{data.product.title.split('-')[0]}</p>
                  <p className="name">{data.product.title.split('-')[1]} / 1개</p>
                  <p className="price">{data.product.price.toLocaleString('ko-KR')}원</p>
                  <p className="time">{data.timePaid.slice(0, 10)}</p>
                </Info>
                <MoreButton onClick={() => handleClickMore(data.detailId)}>자세히</MoreButton>
              </ListItem>
            ))}
          </Inner>
          <BottomInner>
            {purchaseList.length > 0 ? (
              <ListPagination
                limitPage={limitPage}
                total={purchaseList.length}
                paginate={setCurPage}
                curpage={curPage}
              />
            ) : (
              ''
            )}
          </BottomInner>
          {dataLoading && <LoadingSpinner />}
        </>
      )} */}
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
  height: 540px;
  overflow: hidden;
`
const ListItem = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
`

const ImageBox = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #8e8e8e;
  img {
    width: 100%;
  }
`
const Info = styled.div`
  height: 120px;
  .title {
    font-size: 20px;
  }
  .name {
    font-size: 16px;
    color: #8e8e8e;
    margin-bottom: 15px;
  }
  .price {
    font-size: 20px;
  }
  .time {
    font-size: 16px;
  }
`

const Total = styled.p`
  position: absolute;
  top: 5px;
  left: 85px;
  color: #ffa9be;
  font-size: 20px;
`

const BottomInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const MoreButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 16px;
  color: #8e8e8e;
  text-decoration: underline;
`
