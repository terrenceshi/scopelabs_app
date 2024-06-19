import { 
    Typography, Box, Skeleton
} from '@mui/material';

import MuiImg from "./MuiImg.js";

import {
    Link
} from "react-router-dom";

import{ useState } from 'react';

const VideoResult = ({ video }) => {
    var id = video.video_url.slice(32);
    id = id.split("&")[0];
    var url = "https://img.youtube.com/vi/"+ id + "/mqdefault.jpg";

    const width = {xs: 300, md: 240, lg: 300};

    const [loaded, setLoaded] = useState(false);

    return (
        <Link to = {'/videos/'+video.id} style = {{textDecoration: "none"}}>
            <Box sx = {{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                alignItems: {xs: 'center', sm: 'flex-start'},
                gap: 2
            }}>
                <Box>
                    <MuiImg 
                        src={url} 
                        alt = {video.title} 
                        sx = {{
                            "&:hover": {
                                filter: "brightness(50%)",
                                transition: "all 0.35s ease"
                            },
                            width: width,
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
                </Box>

                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>
                    <Typography variant = "h6" sx = {{
                        color: 'text.primary',
                        width: {xs: 300, sm: 'auto'}
                    }}>
                        {video.title.length >= 70 ? video.title.substring(0, 66) + " ..." : video.title}
                    </Typography>

                    <Typography variant = "body" sx = {{
                        color: 'text.secondary',
                        display: {xs: 'none', sm: 'block'}
                    }}>
                        {video.description.length >= 150 ? video.description.substring(0,147) + " ...": video.description}
                    </Typography>
                </Box>
                
            </Box>
        </Link>
    );
}

export default VideoResult;
  