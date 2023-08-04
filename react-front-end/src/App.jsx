import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import { UserProvider } from './context/UserContext/UserState'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
