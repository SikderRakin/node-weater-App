const express = require('express');
const path = require('path');
const hbs = require('hbs');
const weatherstack = require('./utils/weather-forcast');
const geocode = require('./utils/geocode');
const { title } = require('process');
const app= express()
//port setup
const port=process.env.PORT || 3000

//define paths for express confiq
const publicDirectorypath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const viewPartials=path.join(__dirname,'../templates/partials')
//setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(viewPartials)
// setup static directory to serve
app.use(express.static(publicDirectorypath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Sikder Rakin'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about',
        name:'Sikder Rakin'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        name:'Sikder Rakin'
    })
})
app.get('/weather',(req,res)=>{
    console.log(req.query.address)
   if(!req.query.address){
    return res.send({
    error:'Please Give us Adrress'

})
   }
   
   else
   { 
    geocode(req.query.address,(error,{latitude,longtitude,location}={})=>{
        if(error){
            
            return res.send({

                error:'Please Give us Adrress'
            
            })
             
        }
    weatherstack(latitude,longtitude, (error,weatherstackdata) => {

                 res.send({
                location: location,
                weatherstackdata: weatherstackdata
           })
                 

             
      })
    })

  
      
   }

})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'help article not Found',
        name:'Sikder Rakin'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Sikder Rakin'
    })
})

app.listen(port,()=>{
    console.log("sever is up port is "+port)
})