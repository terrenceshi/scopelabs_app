import { 
    Typography, Box, Skeleton
} from '@mui/material';

import MuiImg from "./MuiImg.js";

import {
    Link
} from "react-router-dom";

import{ useState } from 'react';

const Thumbnail = ({ video, screenSize }) => {
    var id = video.video_url.slice(32);
    id = id.split("&")[0];
    var url = "https://img.youtube.com/vi/"+ id + "/mqdefault.jpg";

    const width = {xs: 200, md: 240, lg: 300};

    const [loaded, setLoaded] = useState(false);

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
                        width: width,
                        "&:hover": {
                            filter: "brightness(50%)",
                            transition: "all 0.35s ease"
                        },
                        display: loaded ? 'block' : 'none'
                    }}
                    onLoad={() => setLoaded(true)}
                />

                <Skeleton 
                    variant="rectangular" 
                    height = {'auto'}
                    sx = {{
                        aspectRatio: '16/9',
                        width: width,
                        display: loaded ? 'none' : 'block'
                    }}
                />

                <Typography variant = "p" width = {width} sx = {{
                    color: 'text.primary'
                }}>
                    { (screenSize === 'sm' || screenSize === 'xs') && video.title.length >= 40 ? video.title.substring(0, 40) + "...":
                    video.title.length >= 80 ? video.title.substring(0, 76) + "...": video.title}
                </Typography>
            </Box>
        </Link>
    );
}

export default Thumbnail;
  