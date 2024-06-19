import { 
    Typography, Box
} from '@mui/material';

import MuiImg from "./MuiImg.js";

import {
    Link
} from "react-router-dom";

const Thumbnail = ({ video }) => {
    var id = video.video_url.slice(32);
    id = id.split("&")[0];
    var url = "https://img.youtube.com/vi/"+ id + "/mqdefault.jpg";

    const width = 300;

    return (
        <Link to = {'/videos/'+video.id} style = {{textDecoration: "none"}}>
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            
                <MuiImg 
                    src={url} 
                    alt = {video.title} 
                    sx = {{
                        width: {width},
                        "&:hover": {
                            filter: "brightness(50%)",
                            transition: "all 0.35s ease"
                        }
                    }}
                    onLoad={() => {
                    }}
                />
            

            <Typography variant = "p" width = {width} sx = {{
                color: 'text.primary'
            }}>
                {video.title.length >= 80 ? video.title.substring(0, 76) + " ...": video.title}
            </Typography>
        </Box>
        </Link>
    );
}

export default Thumbnail;
  