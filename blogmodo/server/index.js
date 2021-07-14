const express = require('express');
const bodyParser = require('body-parser');

const Blog = require('../database-mongodb/Blog.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/blogs', function(req, res) {
  Blog.find({}, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
});

app.post('/add', function(req, res){
  Blog.create({
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    body: req.body.body
  }, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.patch('/api/blogs/:Id', function(req, res){
  Blog.findByIdAndUpdate(req.params.Id, {$inc: { views: 1 }},
    function(err, result){
    if(err){
      res.send(err)
      } else {
      res.send(result) 
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
