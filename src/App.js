// import logo from './logo.svg';
import { Box } from '@mui/system';
import './App.css';
import Sidebar from './navbar/Sidebar';
import SearchArea from './Search/SearchArea';
function App() {
  return (
    <Box className="App">
      <Sidebar/>
      <SearchArea/>
      {/* <Map/> */}
    </Box>
  );
}

export default App;
