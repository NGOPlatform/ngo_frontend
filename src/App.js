import { Box, Container } from '@mui/system';
import './wwwroot/css/App.css';
import { useState, useEffect } from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import { About, Contact, Cookies, Gdpr, Inbox, Login, Register, Saved, Subscriptions, Terms, Profile, Dashboard, MapPage, Resources} from './Pages/PagesIndex';
import {
  Routes,
  Route,
} from "react-router-dom";
import News from './Pages/News';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const localStorageUserData = JSON.parse(localStorage.getItem('userData'));
    if (localStorageUserData) {
      setUserData(localStorageUserData);
    }
  }, []);

  const handleLoggedIn = (userParsedToken) => {
    localStorage.setItem('userData', JSON.stringify(userParsedToken))
    setUserData(userParsedToken);
  }

  return (
    <Box className="App">
      <Navbar userData={userData} onLoggedIn={handleLoggedIn} />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<Login onLoggedIn={handleLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/subs" element={<Subscriptions />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/profile" element={<Profile userData={userData} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      
      </div>
      <Footer />
    </Box>
    // <Map/>
  );
}

export default App;
