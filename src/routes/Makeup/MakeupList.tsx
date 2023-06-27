import React, { useState } from 'react';
import styled from 'styled-components';
import { items } from './makeupData';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  align-items: flex-start; 
  max-width: 1250px;
  margin: 0 auto;
  gap: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #8E8E8E;
  overflow: hidden;
  
  &:hover {
    border: 2px solid #FFA9BE;
    
    & > ${Image} {
      border: none;
      border-bottom: 2px solid #FFA9BE;
    }
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #8E8E8E;
`;


const Title = styled.h1`
  font-size: 18px;
  margin-top: 10px;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  margin-top: 5px;
`;

const Price = styled.h3`
  font-size: 16px;
  margin-top: 5px;
`;
const MakeupList = () => {
  const itemsPerPage = 12;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <ListContainer>
        {currentItems.map((item) => (
          <ItemContainer key={item.id}>
            <Image src={item.image} alt="상품 이미지" />
            <Title>{item.name}</Title>
            <Subtitle>{item.subName}</Subtitle>
            <Price>{item.price.toLocaleString()}원</Price>
          </ItemContainer>
        ))}
      </ListContainer>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        이전
      </button>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        다음
      </button>
    </>
  );
};

export default MakeupList;
