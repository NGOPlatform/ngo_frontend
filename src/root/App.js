// import logo from './logo.svg';
import { Box } from '@mui/system';
import './App.css';
import Navbar from '../navbar/Navbar';
import Home from './Home';
import Footer from './Footer';
// import Map from '../Map/Map';
// import Login from '../Pages/Login';
// import Register from '../Pages/Register';
import {About, Contact, Cookies, Gdpr, Inbox, Login, Register, Saved, Subscriptions, Terms} from '../Pages/PagesIndex';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Box className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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
