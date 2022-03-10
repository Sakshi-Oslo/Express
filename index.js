const { response } = require("express");
const { request } = require("express");
const express=  require("express");
const app= express()

// app.use( (request, response) => {
//     console.log("We got a new request")
//     // response.send("HEllo We got your request")
//     response.send('<h1>This is my heading</h1>')
// })
app.get('/', (req, res) =>{
    res.send("THIS IS  MY HOMEPAGE")
})
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send('<h1>On ${subreddit} subreddit</h1>')
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send('<h1>Veiwing Postid : ${postId} on ${subreddit} subreddit</h1>')
})
app.post('/cats', (req, res) =>{
    res.send("ME-WOW")
})
app.get('/cats', (request, response) =>{
    response.send("ME-WOW")
})

app.get('/dogs', (request, response) =>{
    response.send("WOOF")
})
app.get('*', (req, res) =>{
    res.send("ERORR 404")
})
app.listen(3000, () => {
    console.log("Listening To Port 3000")
})

