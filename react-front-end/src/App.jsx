import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import { UserProvider } from './context/UserContext/UserState'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
