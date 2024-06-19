import { 
    Typography, Box, TextField, Button
} from '@mui/material';

import UploadIcon from '@mui/icons-material/Upload';

import { useState } from 'react';

import axios from 'axios';

const Upload = ({account}) => {
    const width = 750;

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleClick(){
        var postUrl = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos';

        axios.post(postUrl, {
            user_id: account,
            description: desc,
            video_url: url,
            title: title
        })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
        }}>
            <TextField
                label="Enter Url"
                sx = {{
                    width: {width}
                }}
                onChange={(event) => {
                    setUrl(event.target.value)
                }}
            />

            <TextField
                label="Title"
                sx = {{
                    width: {width}
                }}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

            <TextField
                label="Description"
                multiline
                rows={6}
                sx = {{
                    width: {width},
                }}
                onChange={(event) => {
                    setDesc(event.target.value)
                }}
            />

            <Box sx = {{
                width: {width},
                pt: 1,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button 
                    variant="contained" 
                    onClick = {handleClick}
                    disabled={url == "" || title == "" || desc == ""}
                >
                        Upload
                </Button>
            </Box>
        </Box>
    );
}

export default Upload;
  