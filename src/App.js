import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Home, VideoDetail, ChannelDetail, SearchFeed} from './components';



function App() {
  return (
    <Router>
      <Box sx={{backgroundColor : '#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/video/:id' exact element={<VideoDetail/>}  />
          <Route path='/channel/:id' exact element={<ChannelDetail/>}  />
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}  />
          
          
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
