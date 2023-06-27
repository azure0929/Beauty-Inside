import React from 'react';
import GlobalStyle from '../../styles/GlobalStyles';
import styled from 'styled-components';
import MakeupList from './MakeupList';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;


const Title = styled.h1`
  font-family: 'Noto Sans KR';
  text-align: center;
  margin-top: 100px;
`;

const Makeup = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title>메이크업</Title>
        <MakeupList />
      </Container>
    </div>
  );
};

export default Makeup;