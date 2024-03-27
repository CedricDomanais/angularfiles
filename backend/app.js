const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
const Post = require ('./models/post');
const app = express();

app.use(cors()); // Use the cors middleware

mongoose.connect("mongodb+srv://zeddomanais0421:cedric04@cluster0.bwnspso.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to the datebase!')
})
.catch(()=>{
    console.log('Connection failed!')
})
,
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}));


app.use((req,res, next) =>{
        res.setHeader("Acess-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Headers","Origin, x-Requested-with, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        next();

})

app.post("/api/posts", (req,res, next)=> {const posts= req.body;
console.log(post);
res.status(201).json({
    message: 'post added succesfully'
    });
})

app.use('/api/posts' , (req, res, next)=>{
    const posts = [
    {
            id:'1',
            title: 'olyvic',
            content: 'ron'
    },
            {
                id:'2',
                title: 'server side',
                content: 'from server side'
            }
    ];
                res.status(200).json({
                    message: 'Posts fetched succesfully',
                    posts: posts
                });

});

module.exports = app;