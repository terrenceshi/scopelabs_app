import { 
    Box, Typography
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  
const Comment = ({comment}) =>  {

    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'flexStart'
        }}>
            <AccountCircleIcon sx = {{
                fontSize: 48
            }}/>

            <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>
                <Typography variant = "h6">
                    {comment.user_id}
                </Typography>

                <Typography variant = "body">
                    {comment.content}
                </Typography>
            </Box>
        </Box>
    );
}

export default Comment;
  