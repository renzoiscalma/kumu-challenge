import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Content, DrawerHeader, Header, Sidebar, MobileDrawer } from './components/';

function App() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [liveStreams, setLiveStreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `https://liveapi.kumu.live/site/get-browse-live?page=${page}`
      );

      setLiveStreams((prev) => [...prev, ...result.data.data.lives]);
    }

    fetchData().then(() => {
      setIsLoading(isLoading => {
        return isLoading ? false : false;
      });
    });
  }, [page])
  
  const handleOpen = () => {
    setOpen(open => {
      return open ? false : true;
    });
  }

  const handleMobileOpen = () => {
    setMobileOpen(open => {
      return open ? false : true;
    });
  }

  const handleSeeMore = () => {
    setPage(page => page + 1);
  }

  return (
    <>
    {
      (isLoading) 
      ? <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      : 
        <Box sx={{display: 'flex'}} >
          <Header open={open} handleOpen={handleOpen} handleMobileOpen={handleMobileOpen}></Header>
          <Sidebar open={open} handleOpen={handleOpen} live={liveStreams}></Sidebar>
          <MobileDrawer open={mobileOpen} handleMobileOpen={handleMobileOpen}></MobileDrawer>
          <Box component="main" sx={{}}>
            <DrawerHeader />
            <Content open={open} handleSeeMore={handleSeeMore} live={liveStreams}></Content>
          </Box>
        </Box>
    }
    </>
  );
}

export default App;
