import React, { useState } from 'react';
import GlobalStyle from '../../styles/GlobalStyles';
import styled from 'styled-components';
import MakeupList from './MakeupList';
import MakeupFilter from './MakeupFilter';
import { items } from './makeupData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-family: 'Noto Sans KR';
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 700;
`;

function Makeup() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  // 선택한 카테고리에 맞는 상품만 필터링
  const filteredItems = items.filter((item) => {
    if (selectedCategories.length === 0) {
      return true; // 카테고리가 선택되지 않은 경우 모든 상품 반환
    }
    return selectedCategories.includes(item.category);
  });

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Title>메이크업</Title>
        <MakeupFilter onSelectCategory={handleCategorySelect} />
        <MakeupList items={filteredItems} />
      </Container>
    </div>
  );
}

export default Makeup;
