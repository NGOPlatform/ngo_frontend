// import logo from './logo.svg';
import { Box } from '@mui/system';
import './App.css';
import {SIDEBAR_SIZE} from './Globals';
import Sidebar from './navbar/Sidebar';
import SearchArea from './Search/SearchArea';
function App() {
  return (
    <Box className="App" sx={{ gridTemplateColumns: + `${SIDEBAR_SIZE}px 1fr 1fr`}}>
      <Sidebar/>
      <SearchArea/>
      {/* <Map/> */}
    </Box>
  );
}

export default App;
