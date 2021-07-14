import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Create(props) {
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [body, setBody] = useState("");
    
    const addBlog = ()=> {
        axios.post('/add', {
            title,
            author,
            imageUrl,
            body
        }).then(result=>{
            console.log(result.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="create">
  <div className="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input value={title} className="create-input" type="text"  placeholder="Post Title"
      onChange={(e)=>{ setTitle(e.target.value)}}
      ></input>
      <input value={author} className="create-input" type="text"  placeholder="Author"
      onChange={(e)=>{ setAuthor(e.target.value) }} 
      ></input>
      <input value={imageUrl} className="create-input" type="text"  placeholder="Image URL"
      onChange={(e)=>{ setImageUrl(e.target.value) }} 
      ></input>
      <textarea value={body} className="create-body-textarea"  placeholder="Post Body"
      onChange={(e)=>{ setBody(e.target.value) }} 
      ></textarea>
      <button className="create-submit-button" type="submit"
      onSubmit={addBlog()}
      >Save post</button>
    </form>
  </div>
  <div className="create-preview">
    <h2>PREVIEW</h2>
        <h2> {title} </h2>
        <h3> {author} </h3>
        <img src={imageUrl} />
        <p> {body} </p>
  </div>
</div>
    )
}
