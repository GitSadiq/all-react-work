import { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import StyledBadge from "./utility";




function App() {
  const [state, setState] = useState();

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://my-json-server.typicode.com/GitSadiq/secondapi/posts")
      setState(resp.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="App-header">
        <h1>FaceBook Posts</h1>

        {state?.map((item, index) => {
          return (
            <div key={index} className="post">
              <div className="user">
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={item.url} />
                </StyledBadge>
                <h3>{item.UserName}</h3>
              </div>

              <p>{item.body}</p>
              <div className="image-div">
                <img
                  alt=""
                  src={item.url}
                />
              </div>
              <div className="comments-section">
                <div className="like"><ThumbUpOffAltIcon fontSize="inherit" /> <p>Like</p></div>
                <div className="like"><ChatBubbleOutlineOutlinedIcon fontSize="inherit" /><p>Comments</p> </div>
                <div className="like"><ReplyRoundedIcon fontSize="inherit" /><p>Share</p> </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
