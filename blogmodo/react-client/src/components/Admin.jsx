import React from 'react'

export default function Admin(props) {
    return (
        <div>
      {console.log(props, 'admin props')}
  <ul>
      {props.blogs.map((blog, key)=>
    <li key={key} className="post-list-entry">
      <div className="post-list-entry-title">{blog.title}</div>
      <div className="post-list-entry-byline"> {blog.author}, {blog.createdAt}  </div>
      <div className="stats-list-item-views">{blog.views}</div>
    </li>
      )}
  </ul>
</div>
    )
}
