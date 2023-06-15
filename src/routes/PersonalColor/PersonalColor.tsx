import GlobalStyle from '../../styles/GlobalStyles'
import styled from 'styled-components'

const PersonalColor = () => {

  // Title 부분은 테스트용입니다. const Title 부분과 <Title> 줄을 지우고 내용을 넣으시면 됩니다.
  const Title = styled.h1`
    font-family: 'InkLipquid';
    text-align: center;
    margin-top: 100px;
  `

  return (
    <div>
      <GlobalStyle />
      <Title>퍼스널 컬러 진단</Title>
    </div>
  )
}

export default PersonalColor
