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
  Dialog,
  CssBaseline,
  Skeleton
} from '@mui/material';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from "./assets/FULL_LOGO_COLOR.png"

import Landing from "./pages/Landing.js";
import Upload from "./pages/Upload.js";
import MyVideos from "./pages/MyVideos.js";

import MuiImg from "./components/MuiImg.js";
import Video from "./pages/Video.js";

import{ useState, useEffect, React } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',

    }
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("terrence_shi");

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [ screenSize, setScreenSize ] = useState('md');

  const [loaded, setLoaded] = useState(false);

  const theme = useTheme();

  function handleResize() {
    setWindowDimensions(getWindowDimensions());

    var width = getWindowDimensions().width;
    if (width >= theme.breakpoints.values.xs && width < theme.breakpoints.values.sm) {
      setScreenSize('xs');
    } else if (width >= theme.breakpoints.values.sm && width < theme.breakpoints.values.md) {
      setScreenSize('sm');
    } else if (width >= theme.breakpoints.values.md && width < theme.breakpoints.values.lg) {
      setScreenSize('md');
    } else if (width >= theme.breakpoints.values.lg && width < theme.breakpoints.values.xl) {
      setScreenSize('lg');
    } else if (width >= theme.breakpoints.values.xl) {
      setScreenSize('xl');
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx = {{
        pt: 2,
        pb: 12
      }}>
        <Box sx = {{
          px: '4vw',
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
                width: {xs: 200, sm: 'auto'},
                display: loaded ? 'block' : 'none'
              }}
              onLoad={() => setLoaded(true)}
            />
            <Skeleton 
              variant="rectangular" 
              height = {'auto'}
              sx = {{
                  aspectRatio: '315/87',
                  width: {xs: 200, sm: 315},
                  display: loaded ? 'none' : 'block'
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
              disableScrollLock={true}
            >
              <MenuItem divider = {true} style={{ backgroundColor: 'transparent', cursor: 'default' }} disableRipple>
                {account}
              </MenuItem>

              <Link style = {{textDecoration: "none", color: 'white'}} to = {'/myvideos'}>
                <MenuItem onClick={() => {setAnchorEl(null)}}>
                    My videos
                </MenuItem>
              </Link>
              <Link style = {{textDecoration: "none", color: 'white'}} to = {'/upload'}>
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
          <Route path="/" element={<Landing windowDimensions = {windowDimensions} screenSize = {screenSize}/>} />
          <Route path="/videos/:id" element={<Video account = {account} screenSize = {screenSize}/>} />
          <Route path="/upload" element={<Upload account = {account}/>} />
          <Route path="/myvideos" element={<MyVideos account = {account}/>} />
        </Routes>

      </Box>
    </ThemeProvider>
  );
}

export default App;
