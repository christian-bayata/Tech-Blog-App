const { default: axios } = require('axios');
const express = require('express');
const newsRouter = express.Router();

newsRouter.get('/', async(req, res) => {
    try {
      const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
      res.render('news', { articles : newsAPI.data });  
    } catch(err) {
        if(err.response) {
          
            console.log(err.response.data);
            console.log(err.response.headers);
            console.log(err.response.status);
        } else if(err.request) {
          
            console.log(err.request);
        } else {
           
            console.log('Error', err.message);
        }
    }
})

newsRouter.get('/:id', async(req, res) => {
    var getID = req.params.id
    try {
      const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${getID}`);
      res.render('singlePage', { article : newsAPI.data });  
    } catch(err) {
        if(err.response) {
          
            console.log(err.response.data);
            console.log(err.response.headers);
            console.log(err.response.status);
        } else if(err.request) {
          
            console.log(err.request);
        } else {
           
            console.log('Error', err.message);
        }
    }
})

newsRouter.post('', async(req, res) => {
    var search = req.body.search;
    try {
      const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`);
      res.render('searchPage', { articles : newsAPI.data });  
    } catch(err) {
        if(err.response) {
          
            console.log(err.response.data);
            console.log(err.response.headers);
            console.log(err.response.status);
        } else if(err.request) {
          
            console.log(err.request);
        } else {
           
            console.log('Error', err.message);
        }
    }
})
module.exports = newsRouter;