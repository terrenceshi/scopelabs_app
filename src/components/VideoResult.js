import { 
    Typography, Box
} from '@mui/material';

import MuiImg from "./MuiImg.js";

import {
    Link
} from "react-router-dom";

const VideoResult = ({ video }) => {
    var id = video.video_url.slice(32);
    id = id.split("&")[0];
    var url = "https://img.youtube.com/vi/"+ id + "/mqdefault.jpg";

    const width = 300;

    return (
        <Link to = {'/videos/'+video.id} style = {{textDecoration: "none"}}>
            <Box sx = {{
                display: 'flex',
                flexDirection: 'row',
                gap: 2
            }}>
                
                    <MuiImg 
                        src={url} 
                        alt = {video.title} 
                        sx = {{
                            "&:hover": {
                                filter: "brightness(50%)",
                                transition: "all 0.35s ease"
                            }
                        }}
                        onLoad={() => {
                        }}
                    />
                

                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>
                    <Typography variant = "h6" sx = {{
                        color: 'text.primary'
                    }}>
                        {video.title.length >= 70 ? video.title.substring(0, 66) + " ..." : video.title}
                    </Typography>

                    <Typography variant = "body" sx = {{
                        width: 700,
                        color: 'text.secondary'
                    }}>
                        {video.description.length >= 150 ? video.description.substring(0,147) + " ...": video.description}
                    </Typography>
                </Box>
                
            </Box>
        </Link>
    );
}

export default VideoResult;
  