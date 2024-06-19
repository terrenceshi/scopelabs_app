import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { 
  Box,
  Input,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from "./assets/FULL_LOGO_COLOR.png"

import Landing from "./pages/Landing.js";
import Upload from "./pages/Upload.js";
import MyVideos from "./pages/MyVideos.js";

import MuiImg from "./components/MuiImg.js";
import Video from "./pages/Video.js";

import * as React from 'react';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <Box sx = {{
      px: 5,
      pt: 2
    }}>
      <Box sx = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pb: 3
      }}>
        <Link to="/">
          <MuiImg 
            src={logo} 
            alt = {'Learnwell'} 
            sx = {{
            }}
            onLoad={() => {
            }}
          />
          </Link>

          {/*
          <Input placeholder="Search" sx = {{
            width: 400
          }}/>
          */}

          <IconButton 
            onClick = {(event) => {setAnchorEl(event.currentTarget)}}
            sx = {{
              p: 0,
              m: 1
          }}>
              <AccountCircleIcon sx = {{
                fontSize: 48
              }}/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => {setAnchorEl(null)}}
          >
            <Link style = {{textDecoration: "none"}} to = {'/myvideos'}>
              <MenuItem onClick={() => {setAnchorEl(null)}}>
                  My videos
              </MenuItem>
            </Link>
            <Link style = {{textDecoration: "none"}} to = {'/upload'}>
              <MenuItem onClick={() => {setAnchorEl(null)}}>
                  Upload
              </MenuItem>
            </Link>

          </Menu>
      </Box>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/videos/:id" element={<Video/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/myvideos" element={<MyVideos/>} />
      </Routes>

    </Box>
  );
}

export default App;
