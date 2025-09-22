import { Route, Routes, BrowserRouter } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/user/login" element={<LoginPage/>} />
            <Route path="/user/register" element={<RegisterPage/>} />
            <Route path="/user/edit" element={<EditPage/>} /> 
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
