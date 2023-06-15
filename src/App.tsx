import { Route, Routes } from 'react-router-dom'
import Header from './components/common/TheHeader'
import Footer from './components/common/TheFooter'
import Main from './routes/Main'
import PersonalColor from './routes/PersonalColor/PersonalColor'
import Best from './routes/Best'
import Makeup from './routes/Makeup/Makeup'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Cart from './routes/Cart/Cart'
import Mypage from './routes/MyPage/MyPage'

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/PersonalColor' element={<PersonalColor />} />
          <Route path='/Best' element={<Best />} />
          <Route path='/Makeup' element={<Makeup />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Mypage' element={<Mypage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
