import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'

const Banner = () => {

  const Banner = styled.div`
    position: relative;
  `

  return (
    <div>
      <GlobalStyle />
      <Banner>
        <div className='inner'>
          <ProductLink href='javascript:void(0)'><img src={banner01}/></ProductLink>
          <ProductLink href='javascript:void(0)'><img src={banner01}/></ProductLink>
          <ProductLink href='javascript:void(0)'><img src={banner01}/></ProductLink>
        </div>
      </Banner>
    </div>
  )
}

export default Banner