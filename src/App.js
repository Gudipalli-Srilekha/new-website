
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom";

import Footer from './pages/Footer';
import Entertainment from './components/Entertainment';

// import Signup from './components/Signup';
// import FetchData from './components/FetchData';
import NavBar from './pages/NavBar';
import Sports from './components/Sports';
import General from './components/General';
import Health from './components/Health';
import Business from './components/Business';
import Home1 from './components/Home1';
import Usa from './components/Usa';
import India from './components/India';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import MainLogin from './pages/MainLogin';


// import Signup1 from "./Webpage1/Signup1"
// import Login from './Webpage1/Login';
import { useState } from 'react';
import Search from './components/Search';
import Webpage from './components/Webpage';

// import NewsUpdates from './temporary/demo';
// import Top from './Corousel/Top';
// import Neuzy from './components/Neuzy';




function App() {
  const [isAuthenticated,setAuthenticated]= useState(false)
  const handleLogin=(loginresult)=>{
    setAuthenticated(loginresult);
  }
  return (
    <BrowserRouter>
    {/* {isAuthenticated&&<NavBar />}
    {isAuthenticated&&<Footer />} */}
   {/* <NavBar /> */}
  {/* <Webpage /> */}
   <NavBar />
    
   

    
    <Routes>
    <Route path="/login" element={<Signin onLogin={handleLogin} />} />
      
    
       <Route  path="/entertainment" element={<Entertainment />} />
       <Route path="/sports" element={<Sports />} />
       <Route path="/Home" element={<Home1 />} />
       <Route path="/health" element={<Health />} />
       <Route path='/Register' element={<Signup />} />
       <Route path="/business" element={<Business />} />
       <Route path="/general" element={<General />} />

       <Route path="/in" element={<India />} />
       <Route path="/us" element={<Usa />} />
       <Route path="/MainLogin" element={<MainLogin />} />

     
       </Routes>
    
       <Footer /> 

  </BrowserRouter>
  );
}

export default App;
