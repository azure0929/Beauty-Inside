import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'
import banner01 from '../../public/assets/main/banner/banner01.jpg'
import banner02 from '../../public/assets/main/banner/banner02.jpg'
import banner03 from '../../public/assets/main/banner/banner03.jpg'

const Banner = () => {

  const Banner = styled.div`
    position: relative;
  `

  const ProductLink = styled.a`
    > img {
      width: 100%;
      display: block;
    }
  `

  return (
    <div>
      <GlobalStyle />
      <Banner>
        <div className='inner'>
          <ProductLink href='javascript:void(0)'><img src={banner01}/></ProductLink>
          <ProductLink href='javascript:void(0)'><img src={banner02}/></ProductLink>
          <ProductLink href='javascript:void(0)'><img src={banner03}/></ProductLink>
        </div>
      </Banner>
    </div>
  )
}

export default Banner