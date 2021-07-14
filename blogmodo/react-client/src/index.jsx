import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Post from './components/Post.jsx';
import Feed from './components/Feed.jsx';
import Admin from './components/Admin.jsx';
import Create from './components/Create.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed',
      blogs: [],
      blog: [],
      views: 0,
      newTitle: "",
      newAuthor: "",
      newImageUrl: "",
      newBody: ""
    }
    this.changeView = this.changeView.bind(this);
    this.updateViews = this.updateViews.bind(this);
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    axios.get('/api/blogs').then(result=>{
      this.setState({
        blog: result.data[0],
        blogs: result.data,
      })
      console.log(this.state.blog,this.state.blogs, 'hawhaw  ');
    })
  }
  
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  updateViews () {
    axios.patch(`/api/blogs/${this.state.blog._id}`,{views: this.state.blog.views}).then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    })
  }


  renderView() {
    const {view, blogs, blog} = this.state;

    if (view === 'feed') {
      return <Feed blogs={blogs} handleClick={() => this.changeView('anypostview')} handleChange={this.updateViews()}/>
    } if (view === 'admin'){
      return <Admin blogs={blogs} />
    } if (view === 'create') {
      return <Create  />
    } 
    else {
      return <Post blog={blog} />
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            BLOGMODO
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('feed')}>
            See all Posts
          </span>
          <span className="nav-unselected"
          onClick={ () => this.changeView('create')}>
            Write a Post
          </span>
          <span className="nav-unselected" 
            onClick={ () => this.changeView('admin')}>
            Admin
          </span>
        </div>
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blogmodo'));
