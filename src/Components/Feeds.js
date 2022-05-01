import React, { useEffect, useState } from 'react';
import Stories from './Stories';
import styled from 'styled-components';
import Messenger from './Messenger';
import Post from './Post';
import axios from './axios';
import Pusher from 'pusher-js';

const Feed = () => {
    const [postData,setPostData]= useState([]);
    const syncFeeds = async()=>{
       await axios.get('/posts').then(res=>{
                console.log('res.data:',res.data)
                setPostData(res.data)
            })
    }
    const pusher = new Pusher('211715c8264dd1b61bc1', {
        cluster: 'us3'
      });
    useEffect(()=>{
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', (data) => {
            syncFeeds()
    });
    },[])

    useEffect(()=>{
        syncFeeds()
    },[])

 return (
         <FeedWrapper>
            <Stories />
            <Messenger />
            {
                postData.map(entry=>{
                    return (
                    <Post profilePic={entry.avatar} message={entry.text} timestamp={entry.timestamp} imgName={entry.imgName} username={entry.user} />
                    )
            })
            }
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
     flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export default Feed;