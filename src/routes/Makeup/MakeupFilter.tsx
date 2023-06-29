import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';

// 컴포넌트 Props 타입 정의
interface Props {
  onSelectCategory: (categories: string[]) => void; // 카테고리 선택 시 실행될 콜백 함수
}

// 필터 컨테이너 스타일드 컴포넌트
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// 체크박스 스타일드 컴포넌트
const Checkbox = styled.input`
  margin-right: 5px;
`;

// 라벨 스타일드 컴포넌트
const Label = styled.label`
  margin-right: 10px;
`;

// MakeupFilter 컴포넌트
const MakeupFilter = ({ onSelectCategory }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // 카테고리 변경 이벤트 핸들러
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      // 선택한 카테고리 추가
      setSelectedCategories((prevCategories) => [...prevCategories, value]);
    } else {
      // 선택 취소한 카테고리 제거
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  // 모든 카테고리 선택 해제 이벤트 핸들러
  const handleAllCategories = () => {
    setSelectedCategories([]); // 모든 카테고리 선택 해제
  };

  // 선택한 카테고리 배열을 전달하여 분류 처리
  useEffect(() => {
    onSelectCategory(selectedCategories); // onSelectCategory 콜백 함수 호출
  }, [selectedCategories, onSelectCategory]);

  return (
    <FilterContainer>
      <Label>
        <Checkbox
          type="checkbox"
          value="페이스"
          onChange={handleCategoryChange}
        />
        페이스
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          value="립"
          onChange={handleCategoryChange}
        />
        립
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          value="아이"
          onChange={handleCategoryChange}
        />
        아이
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          checked={selectedCategories.length === 0} // 모든 체크박스를 선택 해제할 때 체크 여부 처리
          onChange={handleAllCategories}
        />
        전체
      </Label>
    </FilterContainer>
  );
};

export default MakeupFilter;
