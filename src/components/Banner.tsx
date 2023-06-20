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
        </div>
      </Banner>
    </div>
  )
}

export default Banner