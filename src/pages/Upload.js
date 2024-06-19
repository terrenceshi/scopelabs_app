import { 
    Box, TextField, Button, Typography
} from '@mui/material';

import { useState } from 'react';

import axios from 'axios';

const Upload = ({account}) => {
    const width = {xs: 320, sm: 500,md: 750,lg: 750};

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [uploaded, setUploaded] = useState(false);

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
            setUrl("");
            setTitle("");
            setDesc("");
            setUploaded(true);
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
                value = {url}
                sx = {{
                    width: width
                }}
                onChange={(event) => {
                    setUrl(event.target.value)
                }}
            />

            <TextField
                label="Title"
                value = {title}
                sx = {{
                    width: width
                }}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

            <TextField
                label="Description"
                multiline
                value = {desc}
                rows={6}
                sx = {{
                    width: width,
                }}
                onChange={(event) => {
                    setDesc(event.target.value)
                }}
            />

            <Box sx = {{
                width: width,
                pt: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant = "body" sx = {{
                    opacity: uploaded ? 1 : 0,
                    transition: '0.35s'
                }}>
                    Video Uploaded!
                </Typography>
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
  