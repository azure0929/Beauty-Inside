import { useLocation, useNavigate } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'
import { getProduct } from '../apis/api'
import { useEffect, useState } from 'react'


const Section = styled.div`
  margin-top: 180px;
  margin-bottom: 80px;
  &:last-child {
    border-top: 1px solid #8e8e8e;
    margin-bottom: 0;
  }
  > div.inner {
    width: calc(100% - 500px);
    margin: 0 auto;
    > img {
      margin-top: 100px;
      width: 100%;
      display: block;
    }
    > div.product-info {
      display: flex;
      > div.photo {
        position: relative;
        width: 40%;
        > img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          display: block;
        }
      }
      > div.product-detail {
        width: 60%;
        > div.detail-info {
          margin-bottom: 40px;
          > h3 {
            font-family: 'Noto Sans KR';
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -.05em;
            margin-bottom: 4px;
          }
          > span {
            display: block;
            font-family: 'Noto Sans KR';
            font-size: 20px;
            letter-spacing: -.05em;
          }
        }
        > div.price {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 186px;
          > p {
            font-family: 'Noto Sans KR';
            font-size: 20px;
            letter-spacing: -.05em;
            > span {
              font-family: 'Spoqa Han Sans Neo';
              letter-spacing: 0;
              font-size: 32px;
              font-weight: 500;
            }
          }
        }
        > div.link {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`

const Button = styled.button`
  width: 110px;
  height: 50px;
  margin-right: 20px;
  border: 1px solid #8e8e8e;
  border-radius: 6px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  letter-spacing: -.05em;
  transition: .2s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #fff;
    background-color: #ffa9ba;
    border-color: transparent;
  }
`


const ProductDetail = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const id = location.state.id

  const navigateToCartProduct = () => {
    navigate('/CartProduct')
  }

  const navigateToCartPurchase = () => {
    navigate('/CartPurchase')
  }

  const [dataLoading, setdataLoading] = useState(false)

  const [productDetail, setproductDetail] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        // setdataLoading(true)
        const data = await getProduct(id)
        console.log(data)
        setproductDetail(data)
      } catch (error) {
        // setdataLoading(false)
        console.error('Error fetching products:', error)
      } finally {
        // setdataLoading(false)
      }
    })()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Section>
        <div className='inner'>
          <div className='product-info'>
            <div className='photo'>
              <img src={productDetail.thumbnail} alt='' />
            </div>
            <div className='product-detail'>
              <div className='detail-info'>
                <h3>{productDetail.title}</h3>
              </div>
              <div className='price'>
                <p><span>{productDetail.price}</span>원</p>
              </div>
              <div className='link'>
                <Button onClick={navigateToCartProduct}>장바구니</Button>
                <Button onClick={navigateToCartPurchase}>구매하기</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className='inner'>
          <img src={productDetail.photo} alt='Loading image'/>
        </div>
      </Section>
    </div>
  )
}

export default ProductDetail