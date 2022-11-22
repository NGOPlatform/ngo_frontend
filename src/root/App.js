import { Box } from '@mui/system';
import './App.css';
import { useState } from 'react';

import Navbar from '../navbar/Navbar';
import Home from './Home';
import Footer from './Footer';
import {About, Contact, Cookies, Gdpr, Inbox, Login, Register, Saved, Subscriptions, Terms} from '../Pages/PagesIndex';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const handleLoggedIn = (value)=>{
    // console.log(value)
      setAuth(value);
  }
  const [auth, setAuth] = useState(false);

  return (
    <Box className="App">
      <Navbar auth={auth}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoggedIn={handleLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/subs" element={<Subscriptions />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gdpr" element={<Gdpr />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
      <Footer />
    </Box>
    // <Map/>
  );
}

export default App;
