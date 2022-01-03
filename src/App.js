import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Content, DrawerHeader, Header, Sidebar } from './components/';

function App() {
  const [open, setOpen] = useState(true);
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
        console.log('loading');
        return isLoading ? false : false;
      });
      console.log(liveStreams);
    });
  }, [page])
  
  const handleOpen = () => {
    setOpen(open => {
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
          <Header open={open} handleOpen={handleOpen}></Header>
          <Sidebar open={open} handleOpen={handleOpen} live={liveStreams}></Sidebar>
          <Box component="main" sx={{}}>
            <DrawerHeader />
            <Content handleSeeMore={handleSeeMore} live={liveStreams}></Content>
          </Box>
        </Box>
    }
    </>
  );
}

export default App;
