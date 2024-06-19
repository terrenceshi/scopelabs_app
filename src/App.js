import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { 
  Box,
  Button,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Dialog
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from "./assets/FULL_LOGO_COLOR.png"

import Landing from "./pages/Landing.js";
import Upload from "./pages/Upload.js";
import MyVideos from "./pages/MyVideos.js";

import MuiImg from "./components/MuiImg.js";
import Video from "./pages/Video.js";

import{ useState, React } from 'react';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("terrence_shi");

  return (
    <Box sx = {{
      pt: 2,
      pb: 10
    }}>
      <Box sx = {{
        px: 5,
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
            <MenuItem divider = {true} style={{ backgroundColor: 'transparent', cursor: 'default' }} disableRipple>
              {account}
            </MenuItem>

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
            <MenuItem onClick={() => {setDialogOpen(true); setAnchorEl(null)}}>
              Logout
            </MenuItem>
          </Menu>

          <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
            <Box sx = {{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
              <Typography variant = "h5">
                Sign In
              </Typography>

              <TextField 
                label="Username" 
                variant="outlined" 
                value = {username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />

              <TextField 
                label="Password" 
                type="password"
                variant="outlined"
                value = {password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />

              <Box sx = {{
                  display: 'flex',
                  justifyContent: 'flex-end'
              }}>
                  <Button 
                      variant="contained" 
                      onClick = {() => {setAccount(username); setDialogOpen(false); setUsername(""); setPassword("")}}
                      disabled={username.length === 0 || password.length === 0}
                  >
                          Login
                  </Button>
              </Box>

            </Box>
          </Dialog>
      </Box>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/videos/:id" element={<Video account = {account}/>} />
        <Route path="/upload" element={<Upload account = {account}/>} />
        <Route path="/myvideos" element={<MyVideos account = {account}/>} />
      </Routes>

    </Box>
  );
}

export default App;
