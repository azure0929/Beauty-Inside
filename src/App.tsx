import { Route, Routes } from 'react-router-dom'
import Header from './components/common/TheHeader'
import Footer from './components/common/TheFooter'
import PersonalColor from './routes/PersonalColor/PersonalColor'
import PersonalColorTest from './routes/PersonalColor/PersonalColorTest'
import PersonalColorCool from './routes/PersonalColor/PersonalColorCool'
import PersonalColorWarm from './routes/PersonalColor/PersonalColorWarm'
import SignUp from './routes/SignUp'
import Cart from "./routes/Cart/Cart"
import CartProduct from './routes/Cart/CartProduct'
import CartPurchase from './routes/Cart/CartPurchase'

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/PersonalColor' element={<PersonalColor />} />
          <Route path='/PersonalColorTest' element={<PersonalColorTest />} />
          <Route path='/PersonalColorCool' element={<PersonalColorCool />} />
          <Route path='/PersonalColorWarm' element={<PersonalColorWarm />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/CartProduct' element={<CartProduct />} />
          <Route path='/CartPurchase' element={<CartPurchase />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
