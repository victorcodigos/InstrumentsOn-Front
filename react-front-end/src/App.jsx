import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'
import { OrdersProvider } from './context/OrdersContext/OrdersContext'

import ProductsView from './components/ProductsView/ProductsView'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import './App.css'


function App() {


  return (
    <>
      <div className="GlobalContainer">
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
                  <Route path="/search" element={<Search />} />
                  <Route path="/product/:id" element={<ProductsView />} exact />
                </Routes>
                <Footer />
              </OrdersProvider>
            </ProductsProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
