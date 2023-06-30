import { useState,FormEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';  

const Section = styled.div`
  font-family: 'Noto Sans KR';
  margin-top: 152px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 26px;
    margin-bottom: 12px;
    font-weight: 500;
    letter-spacing: -.05em;
  }
  > div {
    > p {
      font-size: 20px;
      text-align: center;
      margin-bottom: 58px;
      color: #8E8E8E;
      letter-spacing: -.05em;
      > span {
      font-size: 20px;
      color: #ffa9be;
      }
    }
  }
    
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > input {
      width: 500px;
      height: 46px;
      border-radius: 6px;
      margin-bottom: 12px;
      padding: 10px;
      border: 1px solid #8e8e8e;
      &:focus {
        border: 2px solid #FFA9BE;
        outline: none;
      }
    }
    > button {
      width: 500px;
      height: 60px;
      border-radius: 6px;
      font-size: 24px;
      color: #fff;
      background-color: #dedede;
      margin-top: 50px;
      transition: .3s;
      cursor: pointer;
      &:hover {
        background-color: #ffa9be;
      }
    }
  }    
`

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const navigate = useNavigate();

  const handleSignup = () => {
    if (displayName === '' || email === '' || password === '') {
      alert('정보를 입력해주세요.');
      return;
    }

    // 페이지 이동
    navigate('/SignUpResult');
  };

  const headers = {
    "content-type": "application/json",
    "apikey": "KDT5_nREmPe9B",
    "username": "KDT5_Team4"
  }
  
  async function signUp(event: FormEvent) {
    event.preventDefault()
    const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        password,
        displayName
      })
    })
    const json = await res.json()
    console.log(json)
  }

  return (
    <div>
      <Section>
        <h1>회원가입</h1>
        <div>
          <p>
            <span>뷰티인사이드</span>의 다양한 서비스와 퍼스널 진단을 누리세요.
          </p>
        </div>
        <form onSubmit={signUp}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='이메일'/>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder='비밀번호'/>
          <input value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder='이름'/>
          <button type="submit" onClick={handleSignup}>회원가입</button>
        </form>
      </Section>
    </div>
  )
}

export default Signup

