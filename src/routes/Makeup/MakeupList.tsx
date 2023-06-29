import React, { useState } from 'react';
import styled from 'styled-components';

// 상품 객체의 타입 정의
interface Item {
  id: number;
  name: string;
  category: string;
  // 다른 필드들...
}

// MakeupList 컴포넌트의 Props 타입 정의
interface Props {
  items: Item[];
}

// 리스트 컨테이너 스타일드 컴포넌트
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1250px;
  margin: 0 auto;
  gap: 10px;
`;

// 이미지 스타일드 컴포넌트
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #8E8E8E;
  border-radius: 8px;

  &:hover {
    border: 2px solid #FFA9BE;
  }
`;

// 아이템 컨테이너 스타일드 컴포넌트
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;

  &:hover {
    outline: 3px solid #FFA9BE;
  }

  &:hover ${Image} {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 3px solid #FFA9BE;
  }
`;

// 버튼 래퍼 스타일드 컴포넌트
const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;

  button {
    padding: 15px 20px;
    margin: 5px;
    border: 1px solid #8E8E8E;
    border-radius: 5px;
  }

  button:disabled {
    color: white;
    background-color: #FFA9BE;
    border: none;
  }
`;

// 이미지 래퍼 스타일드 컴포넌트
const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

// 제목 스타일드 컴포넌트
const Title = styled.h1`
  font-size: 18px;
  margin-top: 10px;
`;

// 부제목 스타일드 컴포넌트
const Subtitle = styled.h2`
  font-size: 16px;
  margin-top: 5px;
`;

// 가격 스타일드 컴포넌트
const Price = styled.h3`
  font-size: 16px;
  margin-top: 5px;
`;

const MakeupList = ({ items }: Props) => {
  const itemsPerPage = 12; // 페이지당 보여줄 상품 수
  const totalPages = Math.ceil(items.length / itemsPerPage); // 전체 페이지 수 계산
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 관리

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // 현재 페이지에 해당하는 상품 목록

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }; // 이전 페이지로 이동하는 함수

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }; // 다음 페이지로 이동하는 함수

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }; // 페이지 번호를 클릭했을 때 해당 페이지로 이동하는 함수

  const renderPageNumbers = () => {
    const pageNumbers = []; // 페이지 번호를 담을 배열 선언

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    return pageNumbers; // 페이지 번호 배열 반환
  };

  return (
    <>
      <ListContainer>
        {currentItems.map((item) => (
          <ItemContainer key={item.id}>
            <ImageWrapper>
              <Image src={item.image} alt="상품 이미지" />
            </ImageWrapper>
            <Title>{item.name}</Title>
            <Subtitle>{item.category}</Subtitle>
            <Price>{item.price.toLocaleString()}원</Price>
          </ItemContainer>
        ))}
      </ListContainer>
      <ButtonWrapper>
        <button onClick={goToPreviousPage} >
          이전
        </button>
        {/* 페이지 번호 버튼들을 렌더링 */}
        {renderPageNumbers()}
        <button onClick={goToNextPage}>
          다음
        </button>
      </ButtonWrapper>
    </>
  );
};

export default MakeupList;
