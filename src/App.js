import './App.css';
import Header from './Components/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
