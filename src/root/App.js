// import logo from './logo.svg';
import { Box } from '@mui/system';
import './App.css';
import Navbar from '../navbar/Navbar';
import Main from './Main';
import Footer from './Footer'
function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </Box>
  );
}

export default App;
