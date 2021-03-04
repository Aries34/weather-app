const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geoCode')
const weather = require('./utils/weather')

var app = express()

var filepath = path.join(__dirname + '\\public')
var viewspath = path.join(__dirname + '\\templates\\views')
var partialpath = path.join(__dirname + '\\templates\\partial')

app.use(express.static(filepath))

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)


app.get('', (req,res)=>{
    res.render('index',{
        title:'Weather Dates',
        name:'Kwaku Duah'

    })

})

app.get('/about', (req,res)=>{
    res.render('about',{
        title:'About',
       

    })

})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'help',
        

    })

})



app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Please specify the search term'
        })
    }
   geoCode(req.query.address,(error,data)=>{
       if(error){
           return res.send({error:error})
       }
       weather(data.latitude,data.longitude,(error,dat)=>{
           if(error){
               return res.send({error:error})
           }

           res.send({
           forecastdata: dat,
           location: data.location,
            address:req.query.address   

           })
       })
   })
})

app.get('/product', (req,res)=>{
   if(!req.query.search){
   return res.send({
      error:'Please specify  the search terms'       

    })
   }

console.log(req.query.search)
})


app.get('/help/*',(req,res)=>{
    
    res.send('help article not found')
})

app.get('*', (req,res)=>{
    
    res.render('404',{
        title:'Error 404',
        errorMsg:'Page not found'
    })
})














app.listen(1000,()=>{
    console.log('server on')
})

