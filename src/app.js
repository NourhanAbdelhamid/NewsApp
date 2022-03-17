const express= require('express');
const app= express();
const port= process.env.PORT || 3000;
const path = require('path');
const NewsApi = require('./Apis/NewsApi');




app.set('view engine','hbs');

const viewsDirectory=path.join(__dirname,'../templates/views');

app.set('views',viewsDirectory);

const hbs= require('hbs');
const partialsPath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath);


// const publicDirectory=path.join(__dirname,'../public');

// app.use(express.static(publicDirectory));



//home page
app.get('/', (req, res) => {
    NewsApi((error, data) => {

        if(error){
            res.render('home',{error});
        }
        else{
            res.render('home',{articles:data.articles})
        }
    });
});

//about page
app.get('/about',(req,res)=>{
    res.send('about page is running')
})

//social page
app.get('/social',(req,res)=>{
    res.send('social page is running')
})

// 4O4 page
app.get('*', (req, res) => {
    res.render('notFound', {message: '404 Not found'});
});





app.listen(port,()=>{
    console.log('server is running now :)')
})