import { 
    Typography, Box, TextField
} from '@mui/material';

import UploadIcon from '@mui/icons-material/Upload';

const Upload = () => {

    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <UploadIcon sx = {{
                fontSize: 48
              }}/>

            <TextField
                label="Title"
                sx = {{
                    width: 750
                }}
            />

            <TextField
                label="Description"
                multiline
                rows={4}
                sx = {{
                    width: 750,
                }}
            />
        </Box>
    );
}

export default Upload;
  