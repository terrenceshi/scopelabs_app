import { 
    Typography,
    Box,
    IconButton,
    Button
} from '@mui/material';

import Thumbnail from "./Thumbnail.js";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import{ useState, useEffect } from 'react';
  
const Row = ({ title, videos, windowDimensions, screenSize }) => {
    const [sliderX, setSliderX] = useState(0);

    var width = windowDimensions.width * 0.92

    var thumbnailSize = screenSize === 'lg' || screenSize === 'xl' ? 300 :
                        screenSize === 'md' ? 240 : 200

    var padding = screenSize === 'lg' || screenSize === 'xl' ? 24 : 16

    var vidPerVW = Math.floor(width / (thumbnailSize + padding))

    var pixelsToMove = vidPerVW * (thumbnailSize + padding)
    
    var rowWidth = videos.length * (thumbnailSize + padding) - padding

    var numChunks = Math.ceil(rowWidth / width)

    useEffect(() => {
        window.addEventListener('resize', () => {setSliderX(0)});
        return () => window.removeEventListener('resize', () => {setSliderX(0)});
    }, []);

    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflow: 'hidden',
            gap: 0.5
        }}>
            <Typography variant="h4" gutterBottom >
                {title}
            </Typography>

            <Box sx = {{
                display: 'flex',
                position: 'relative'
            }}>
                <Button 
                    onClick={() => setSliderX(sliderX + pixelsToMove)}
                    disabled={sliderX === 0}
                    sx = {{
                        display: 'flex',
                        position: 'absolute',
                        zIndex: 15,
                        height: '100%',
                        width: '4%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                        backgroundColor: '#10101180',
                        opacity: 0,
                        transition: '0.35s',
                        "&:hover": {
                            opacity: 1,
                            backgroundColor: '#10101180'
                        }
                }}>
                        <ArrowBackIosNewIcon sx = {{
                            fontSize: 48,
                            color: 'white'
                        }}/>
                </Button>
                <Button 
                    onClick={() => setSliderX(sliderX - pixelsToMove)}
                    disabled={sliderX <= -((numChunks - 1) * pixelsToMove)}
                    sx = {{
                        display: 'flex',
                        position: 'absolute',
                        zIndex: 15,
                        height: '100%',
                        width: '4%',
                        right: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                        backgroundColor: '#10101180',
                        opacity: 0,
                        transition: '0.35s',
                        "&:hover": {
                            opacity: 1,
                            backgroundColor: '#10101180'
                        }
                }}>
                        <ArrowForwardIosIcon sx = {{
                            fontSize: 48,
                            color: 'white'
                        }}/>
                </Button>

                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: {lg: 3, md: 2, xs: 2},
                    transform: `translateX(${sliderX}px)`, 
                    transition: "transform 0.75s"
                }}>
                    {videos.map((video, vIdx) => (
                        <Thumbnail key = {vIdx} video = {video} screenSize = {screenSize}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Row;
  