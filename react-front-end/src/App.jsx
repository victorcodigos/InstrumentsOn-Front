import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
          <Header/>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
