import { 
    Box, Typography, CircularProgress
} from '@mui/material';

import{ useEffect, useState } from 'react';
import axios from 'axios';

import VideoResult from "../components/VideoResult.js";
  
const MyVideos = ({account}) =>  {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const width = {xs: 400, sm: 580, md: 860, lg: 1080};

    useEffect(() => {
        var url = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=' + account;

        axios.get(url)
        .then(function (response) {
            // handle success
            setData(response.data.videos);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            setLoaded(true);
        });


    }, []);

    return (
        <Box sx = {{
            display: 'flex',
            justifyContent: 'center'
        }}>
            
            { loaded ?
                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    width: width
                }}>
                    {data.length > 0 ? data.map((video, vIdx) => (
                        <VideoResult video = {video} key = {vIdx}/>
                    ))
                    :

                    <Typography variant = "h5">
                        No videos uploaded. Upload one today!
                    </Typography>
                
                    }
                </Box>
                :
                <Box sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 6
                }}>
                    <CircularProgress size="5rem" sx = {{
                        animationDuration: '8s'
                    }}/>
                </Box>
            }
        </Box>
    );
}

export default MyVideos;
  