import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed} from "./components"
import { useState } from 'react';
import SwitchModeContext from './contexts/SwitchModeContext';
const App = () => {
  const [mode, setMode] = useState('dark');
  return (
  <Router>
    <Box sx={{ backgroundColor: mode === 'dark' ? '#000' : '#fff' }}>
      <SwitchModeContext.Provider value={{mode, setMode}}>
      <Navbar />

      <Routes>
        <Route path='/' element={<Feed mode={mode} setMode={setMode}/>}/>
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route  path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>

      </SwitchModeContext.Provider>

    </Box>
   
  </Router>

  )
}

  


export default App;
