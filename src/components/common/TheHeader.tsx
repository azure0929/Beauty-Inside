import companyLogo from '../../../public/assets/logo.png'
import GlobalStyle from '../../styles/GlobalStyles'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Inner = styled.div`
  width: calc(100% - 334px);
  margin: 0 auto;
`

const GnbMenu = styled.div`
  position: relative;
  height: 140px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > div {
    &:first-child {
      position: absolute;
      left: 50%;
      transform: translateX(-40%);
      > a {
        width: 134px;
        display: block;
        > img {
          width: 100%;
          display: block;
        }
      }
    }
    &:last-child {
      display: flex;
      gap: 30px;
      font-family: 'Noto Sans KR';
      font-size: 14px;
      letter-spacing: -.025em;
      color: #191919;
      text-align: right;
      margin-right: 30px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`

const Nav = styled.ul`
  height: 80px;
  line-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  > li {
    font-family: 'Noto Sans KR';
    font-size: 16px;
    letter-spacing: -.025em;
    color: #191919;
  }
`

const NavStyle = styled(NavLink)`
  color: #191919;
  &:link {
    transition : .2s;
  }
  &.active {
    color: #ffa9be;
  }
`


const Header = () => {

  return (
    <div>
      <GlobalStyle />
      <header>
        <Inner>
          <GnbMenu>
            <div>
              <NavLink to="/">
                <img src={companyLogo} />
              </NavLink>
            </div>
            <div>
              <li>
                <NavLink to="/SignIn">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/SignUp">회원가입</NavLink>
              </li>
              <li>
                <NavLink to="/CartPurchase">장바구니</NavLink>
              </li>
              <li>
                <NavLink to="/MyPage/PurchaseList">마이페이지</NavLink>
              </li>
            </div>
          </GnbMenu>
          <Nav>
            <li>
              <NavStyle
                className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
                to="/PersonalColor"
              >
                퍼스널 컬러 진단
              </NavStyle>
            </li>
            <li>
              <NavStyle className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')} to="/Best">
                BEST
              </NavStyle>
            </li>
            <li>
              <NavStyle
                className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
                to="/Makeup"
              >
                메이크업
              </NavStyle>
            </li>
          </Nav>
        </Inner>
      </header>
    </div>
  )
}

export default Header
