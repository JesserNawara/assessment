import React, {useState} from 'react';
import axios from 'axios';



const Post = (props) => (

  //temporary solution to save time :)
  <div className="post">
      <h1 className="post-title">{props.blog.title}</h1>
      <div className="post-byline"><span className="post-byline-author">{props.blog.author}</span> {props.blog.createdAt}</div>
      <img src={props.blog.imageUrl} className="post-image"/>
      <p>{props.blog.body}</p>
  </div>
)

export default Post;
