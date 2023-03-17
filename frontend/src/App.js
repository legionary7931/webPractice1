import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/findID" element={<LogoutPage/>}/>
        <Route path='/signUpPage' element={<SignUpPage/>}/>
    </Routes>
  );
}

export default App;
