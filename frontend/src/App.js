import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  let navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{ navigate('/login') }}>로그인</button>
      <button onClick={()=>{ navigate('/logout') }}>로그아웃</button>
      <button onClick={()=>{ navigate('/signuppage') }}>회원가입</button>
      
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path='/signuppage' element={<SignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
