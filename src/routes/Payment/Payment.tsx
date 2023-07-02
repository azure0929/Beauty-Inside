import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { authVerification, getUserAccounts, requestBuy } from '../../apis/api';

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

interface UserInfo {
  displayName: string;
  email: string;
}

interface UserAccount {
  id: string;
  bankName: string;
  accountNumber: string;
}

export const Payment = () => {
  let total = 0;
  let productTotal = 0;
  const DELIVERY_CHARGE = 2500;
  const STORAGE_KEY = 'detail';
  
  

  const [userInfo, setUserInfo] = useState<UserInfo>({
    displayName: '',
    email: '',
  });
  const [userAccounts, setUserAccounts] = useState<UserAccount[]>([]);
  const [accountId, setAccountId] = useState<string>('');

  const [productList, setProductList] = useState<Product[]>([]);

  // 금액계산
  productList.map((item) => (productTotal = item.price + productTotal));
  total = productTotal + DELIVERY_CHARGE;

  // navigate
  const navigate = useNavigate();

  // 계좌 선택
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountId(e.target.value);
  };

  const requestAllBuy = async () => {
    const products = productList.map((item) => item.id);

    if (accountId === '' || accountId === '계좌 선택') {
      alert('결제수단을 선택해주세요');
    } else {
      await Promise.all(
        products.map((productId) => requestBuy({ productId, accountId }))
      );      
      navigate('/PaymentCompleted');
      let locallist: string[] | null = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      locallist = [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(locallist));
      
    }
  };

  // 결제완료
  const handleClickPayment = () => {
    requestAllBuy();
  };

  const location = useLocation();
const list = location.state as Product[];



useEffect(() => {
  (async () => {
    try {
      const account = await getUserAccounts();
      const data = await authVerification();
      setUserInfo(data);
      setUserAccounts(account.accounts);
      if (Array.isArray(list)) {
        setProductList(list);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  })();
}, [list]);

  return (
    <>
      <GlobalStyle />
      <PaymentWrap>
        <Title>주문서</Title>
        <Inner>
          <p className="inner-title">주문상품 {productList.length}개</p>
          {productList.map((item: Product, index: number) => (
            <OrderItem key={index}>
              <ImageBox>
                <img src={item.thumbnail} alt="" />
              </ImageBox>
              <Info>
                <p className="item-title">{item.title.split('-')[0]}</p>
                <p className="item-name">
                  {item.title.split('-')[1]} <span className="item-number">/ 1개</span>
                </p>
                <p className="item-price">{item.price.toLocaleString('ko-KR')}원</p>
              </Info>
            </OrderItem>
          ))}
        </Inner>
        <Inner>
          <p className="inner-title">주문자 정보</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">주문자 이름</p>
              <p>{userInfo.displayName}</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">주문자 이메일</p>
              <p>{userInfo.email}</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <Inner className="inner-select">
          <p className="inner-title">결제 수단</p>
          <Select onChange={(e) => handleChangeSelect(e)}>
            <option>계좌 선택</option>
            {userAccounts.map((account: UserAccount, index: number) => (
              <option key={index} value={account.id}>
                {account.bankName} {account.accountNumber}
              </option>
            ))}
          </Select>
        </Inner>
        <Inner>
          <p className="inner-title">결제 금액</p>
          <Infowrap>
            <InnerInfo>
              <p className="info-label">총 주문 금액</p>
              <p>{productTotal.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">배송비</p>
              <p>{DELIVERY_CHARGE.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
            <InnerInfo>
              <p className="info-label">총 결제 금액</p>
              <p>{total.toLocaleString('ko-KR')}원</p>
            </InnerInfo>
          </Infowrap>
        </Inner>
        <PaymentButton onClick={handleClickPayment}>
          총 {total.toLocaleString('ko-KR')}원 결제하기
        </PaymentButton>
      </PaymentWrap>
    </>
  );
};

const PaymentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 152px;
`;
const Title = styled.p`
  font-size: 26px;
`;
const Inner = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  border-bottom: 1px solid #8e8e8e;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 40px;
  .inner-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &.inner-select {
    flex-direction: row;
    gap: 60px;
  }
  &:nth-child(5) {
    border: none;
  }
`;
const OrderItem = styled.div`
  width: 1100px;
  display: flex;
  gap: 20px;
`;
const ImageBox = styled.div`
  img {
    width: 120px;
    height: 120px;
  }
`;

const Info = styled.div`
  .item-title {
    font-size: 20px;
  }
  .item-name {
    font-size: 16px;
    color: #8e8e8e;
  }
  .item-price {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const Infowrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InnerInfo = styled.div`
  display: flex;
  .info-label {
    width: 140px;
  }
`;

const Select = styled.select`
  width: 340px;
  height: 46px;
`;

const PaymentButton = styled.button`
  width: 305px;
  height: 50px;
  background-color: #ffa9be;
  font-size: 18px;
  color: #fff;
  border-radius: 6px;
  margin-top: 120px;
`;
