import { useParams }from "react-router-dom";

import { 
  Box, Typography, IconButton, TextField, Divider
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';

import{ useState, useEffect, React } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';

import Comment from "../components/Comment.js";
  
  function Video({account}) {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [comments, setComments] = useState([]);
    const [commentsLoaded, setCommentsLoaded] = useState(false);

    const [input, setInput] = useState("");

    function getComments(){
      var url2 = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=' + id;

      axios.get(url2)
      .then(function (response) {
          // handle success
          setComments(response.data.comments);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function () {
          // always executed
          setCommentsLoaded(true);
      });
    }

    useEffect(() => {
      var url = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=' + id;

      axios.get(url)
      .then(function (response) {
          // handle success
          setData(response.data.video);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function () {
          // always executed
          setLoaded(true);
      });

      getComments();
    }, []);

    function handleClick(){
      var postUrl = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments';

      axios.post(postUrl, {
          video_id: id,
          content: input,
          user_id: account
      })
      .then(function (response) {
          // handle success
          setInput("");
          getComments();
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    }

    return (
      <Box >
          { loaded ?
              <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center'
              }}>
                <Box sx = {{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'black',
                  width: '100%'
                }}>
                  <ReactPlayer 
                    playing = {true}
                    url= {data.video_url}
                    controls = {true}
                    width = {1080}
                    height = {'auto'}
                    style = {{'aspectRatio': '16/9'}}
                  />
                </Box>

                <Box 
                  sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: 1080,
                    pt: 2
                }}>
                  <Typography variant = "h5">
                    {data.title}
                  </Typography>

                  <Typography variant = "body" sx = {{
                    pb: 2
                  }}>
                    {data.description}
                  </Typography>

                  <Divider />

                  <Typography variant = "h5">
                    Comments
                  </Typography>

                  <Box sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    pb: 2,
                    pt: 1
                  }}>
                    <AccountCircleIcon sx = {{
                        fontSize: 48
                    }}/>

                    <TextField 
                      label="Add a comment" 
                      variant="outlined" 
                      value = {input}
                      onChange={(event) => {
                        setInput(event.target.value)
                      }}
                      sx = {{
                        width: '100%'
                    }}/>

                    <IconButton
                      disabled = {input.length == 0}
                      onClick = {handleClick}
                    >
                      <SendIcon sx = {{
                          fontSize: 36,
                          color: '#47b99b'
                      }}/>
                    </IconButton>
                  </Box>
                </Box>

                { commentsLoaded ?
                  <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    width: 1080
                  }}>
                      {comments.map((comment, cIdx) => (
                        <Comment comment = {comment} key = {cIdx} />
                      ))}
                  </Box>
                  :
                  <Box sx = {{
                    pb: 10
                  }}>
                    Loading
                  </Box>
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
  
  export default Video;
  