import { 
    Box, Typography
} from '@mui/material';

import{ useEffect, useState } from 'react';
import axios from 'axios';

import VideoResult from "../components/VideoResult.js";
  
const MyVideos = ({account}) =>  {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

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
        }}>
            { loaded ?
                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    alignItems: 'center'
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
                <div>
                    Loading
                </div>
            }
        </Box>
    );
}

export default MyVideos;
  