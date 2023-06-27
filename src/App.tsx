import { Route, Routes } from 'react-router-dom'
import Header from './components/common/TheHeader'
import Footer from './components/common/TheFooter'
import PersonalColor from './routes/PersonalColor/PersonalColor'
import PersonalColorTest from './routes/PersonalColor/PersonalColorTest'
import PersonalColorCool from './routes/PersonalColor/PersonalColorCool'
import PersonalColorWarm from './routes/PersonalColor/PersonalColorWarm'
import Cart from './routes/Cart/Cart'
import CartProduct from './routes/Cart/CartProduct'
import CartPurchase from './routes/Cart/CartPurchase'
import Main from './routes/Main'
import Best from './routes/Best'
import Makeup from './routes/Makeup/Makeup'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Mypage from './routes/MyPage/MyPage'
import { Payment } from './routes/Payment'
import { OrderList } from './routes/MyPage/OrderList'
import { AccountManage } from './routes/MyPage/AccountManage'
import { InfoEdit } from './routes/MyPage/InfoEdit'
import ScrollToTop from './components/ScrollToTop'
import ProductDetail from './routes/ProductDetail'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/PersonalColor" element={<PersonalColor />} />
          <Route path="/PersonalColorTest" element={<PersonalColorTest />} />
          <Route path="/PersonalColorCool" element={<PersonalColorCool />} />
          <Route path="/PersonalColorWarm" element={<PersonalColorWarm />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CartProduct" element={<CartProduct />} />
          <Route path="/CartPurchase" element={<CartPurchase />} />
          <Route path="/Best" element={<Best />} />
          <Route path="/Makeup" element={<Makeup />} />
          <Route path="/Mypage/*" element={<Mypage />}>
          <Route path="OrderList" element={<OrderList />} />
          <Route path="Account" element={<AccountManage />} />
          <Route path="MyInfo" element={<InfoEdit />} />
          </Route>
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
