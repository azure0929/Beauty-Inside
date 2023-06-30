
import styled from 'styled-components';
import { useState, FormEvent } from 'react';
import { signIn } from '../apis/api';
import { useNavigate } from 'react-router-dom';


const SignInBox = styled.div`
  font-family: 'Noto Sans KR';
  text-align: center;
  margin-top: 100px;

  h1 {
    font-size: 26px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #191919;

    div {
      display: flex;
      align-items: center;
      width: auto;
      margin-top: 10px;
      margin-bottom: 50px;
      font-size: 20px;
      color: #8e8e8e;
      flex-direction: row;

      h2 {
        color: #ffa9be;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 10px;
    margin-top: 10px;
    width: 500px;
    height: 46px;
    border: 1px solid #8e8e8e;
    border-radius: 7px;
  }

  input:focus {
    border: 2px solid #ffa9be;
    outline: none;
  }

  button {
    margin-top: 30px;
    background-color: ${({ isValidEmail }) => (isValidEmail ? 'red' : '#DEDEDE')};
    padding: 20px;
    width: 500px;
    height: 60px;
    border-radius: 7px;
    font-size: 24px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState(''); 


  const headers = {
    'content-type': 'application/json',
    apikey: 'KDT5_nREmPe9B',
    username: 'KDT5_Team4',
  }

  const validateEmail = (input) => {
    // 이메일 유효성 검사
    const regex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
    // 정규 표현식 이용,
    //  /^: 정규 표현식의 처음,
    //  $/: 정규 표현식의 끝,
    // [] : 문자셋,
    // [a-zA-z0-9] : 영문 소,대문자 , 숫자만 입력 가능.
    // {2,3} : 2~3 글자만 입력 가능.

    return regex.test(input)
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value
    setEmail(inputEmail) // 이메일 값 업데이트
    setIsValidEmail(validateEmail(inputEmail)) // 이메일 유효성을 검사하여 상태 값을 업데이트
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()

    try {

      const response = await signIn({ email, password }); // 이메일과 비밀번호를 body로 전달
      if (response.success) {
        alert('로그인에 성공하였습니다.');
        setLoggedIn(true);
        setDisplayName(response.data.user.displayName); 
        navigate(-1);
      } else {
        alert('이메일이나 패스워드가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('로그인에 실패하였습니다.', error);
      alert('로그인에 실패하였습니다.');

    }
  }

  return (
    <SignInBox isValidEmail={isValidEmail}>
      <h1>
        로그인
        <div>
          <h2>뷰티인사이드</h2>의 다양한 서비스와 퍼스널 진단을 누리세요.
        </div>
      </h1>
      <form onSubmit={handleSignIn}>
        <input name="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
        {/* 값이 변경되면 handleEmailChange 함수 호출. */}
        <input
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        {/* 값이 변경되면 setPassword 함수 호출 */}
        <button
          type="submit"
          style={{ backgroundColor: isValidEmail && password !== '' ? '#FFA9BE' : '#DEDEDE' }}
        >
          로그인
        </button>
      </form>
    </SignInBox>
  )
}

export default SignIn
