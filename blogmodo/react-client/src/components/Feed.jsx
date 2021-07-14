import React from 'react';
import SampleData from '../sample_data';
import moment from 'moment';
import axios from 'axios';




const Feed = (props) => (
  
  <div className="feed">
    <ul>
      {props.blogs.map((blog, key)=>
      <li key={key} className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick} onClick={props.handleChange}> {blog.title} </div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author"> {blog.author} </span> {moment().startOf('year').fromNow()} </div>
        <img src={blog.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede"> {blog.body} </span>
      </li>
      )}
    </ul>
  </div>
);

export default Feed;
