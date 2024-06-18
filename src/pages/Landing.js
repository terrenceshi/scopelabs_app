import { 
    Typography,
    Box
} from '@mui/material';

import Row from "../components/Row.js";

import{ useEffect, useState } from 'react';
import axios from 'axios';
  
const Landing = () =>  {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    var historyLst = [data[data.length - 13]];
    var historyLst = historyLst.concat(data.slice(data.length - 11, data.length - 6))

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
                    gap: 4
                }}>
                    <Row 
                        title = {"Science" }
                        videos = {data.slice(-6)}
                    />
                    <Row 
                        title = {"History" }
                        videos = {historyLst}
                    />
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
  