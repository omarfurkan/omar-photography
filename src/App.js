import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blog from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import PageLayout from './Components/PageLayout/PageLayout';



function App() {


  return (
    <div >

      <Routes >
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout/:serviceId" element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
