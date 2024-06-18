import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { 
  styled, 
  Box 
} from '@mui/material';

import logo from "./assets/FULL_LOGO_COLOR.png"

import Video from "./pages/Video.js";
import Landing from "./pages/Landing.js";

const MuiImg = styled("img")({});

function App() {
  return (
    <div className="App">
      <Box sx = {{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'flex-start'
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
      </Box>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/videos/:id" element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
