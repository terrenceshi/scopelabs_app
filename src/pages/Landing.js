import { 
    CircularProgress,
    Box
} from '@mui/material';

import Row from "../components/Row.js";

import{ useEffect, useState } from 'react';
import axios from 'axios';
  
const Landing = ({windowDimensions, screenSize}) =>  {
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
            px: '4vw'
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
                        windowDimensions = {windowDimensions}
                        screenSize = {screenSize}
                    />
                    <Row 
                        title = {"History" }
                        videos = {historyLst}
                        windowDimensions = {windowDimensions}
                        screenSize = {screenSize}
                    />
                    <Row 
                        title = {"English" }
                        videos = {data.slice(data.length - 19, data.length - 13)}
                        windowDimensions = {windowDimensions}
                        screenSize = {screenSize}
                    />

                    <Row 
                        title = {"Math" }
                        videos = {data.slice(data.length - 25, data.length - 19)}
                        windowDimensions = {windowDimensions}
                        screenSize = {screenSize}
                    />
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

export default Landing;
  