import { 
    Box
} from '@mui/material';

import{ useEffect, useState } from 'react';
import axios from 'axios';

import VideoResult from "../components/VideoResult.js";
  
const Landing = () =>  {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        var url = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=terrence_shi';

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
                    {data.map((video, vIdx) => (
                        <VideoResult video = {video} key = {vIdx}/>
                    ))}
                </Box>
                :
                <div>
                    Loading
                </div>
            }
        </Box>
    );
}

export default Landing;
  