import { 
    Typography,
    Box
} from '@mui/material';

import Thumbnail from "./Thumbnail.js";
  
const Row = ({ title, videos }) => {
    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>

            <Box sx = {{
                display: 'flex',
                flexDirection: 'row',
                gap: 3
            }}>
                {videos.map((video, vIdx) => (
                    <Thumbnail id = {vIdx} video = {video} />
                ))}
            </Box>
        </Box>
    );
}

export default Row;
  