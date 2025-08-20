import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/mains/Home';
import Signup from './Pages/mains/Signup';
import Forget from './Pages/mains/Forget';
import Signupwithemail from './Pages/mains/Signupwithemail';
import ContactUs from './Pages/mains/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget_password' element={<Forget />} />
          <Route path='/signup/signupwithemail' element={<Signupwithemail />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
