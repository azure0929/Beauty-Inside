import GlobalStyle from '../styles/GlobalStyles'
import styled from 'styled-components'

const Main = () => {

  const Title = styled.h1`
    font-family: 'Noto Sans KR';
    text-align: center;
    margin-top: 100px;
  `

  return (
    <div>
      <GlobalStyle />
      <Title>메인</Title>
    </div>
  )
}

export default Main
