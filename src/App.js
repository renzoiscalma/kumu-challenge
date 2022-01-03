import Box from '@mui/material/Box';
import './App.css';
import { DrawerHeader, Header, Sidebar, Content } from './components/';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(open => {
      return open ? false : true;
    });
  }

  return (
    <Box sx={{display: 'flex'}}>
      <Header open={open} handleOpen={handleOpen}></Header>
      <Sidebar open={open} handleOpen={handleOpen}></Sidebar>
      <Box component="main" sx={{}}>
        <DrawerHeader />
        <Content></Content>
      </Box>
    </Box>
  );
}

export default App;
