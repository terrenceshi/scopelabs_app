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
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            <Link to = {'/videos/'+video.id}>
                <MuiImg 
                    src={url} 
                    alt = {'Learnwell'} 
                    sx = {{
                        width: {width}
                    }}
                    onLoad={() => {
                    }}
                />
            </Link>

            <Typography variant = "p" width = {width}>
                {video.title}
            </Typography>
        </Box>
    );
}

export default Thumbnail;
  