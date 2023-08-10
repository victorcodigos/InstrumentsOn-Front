import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'
import { OrdersProvider } from './context/OrdersContext/OrdersContext'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </OrdersProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
