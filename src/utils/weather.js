
const request = require('request')

const weather = (latitude,longitude,callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=ac4202f42e2b450232bc4c56acc870aa&query='+ encodeURIComponent(latitude)+ ','+encodeURIComponent(longitude)+''

request({url:url,json:true},(error,response) => {
   
    if(error){
        callback('Unable to connect to weather services',undefined)
        i
    }else if(response.body.error){
       callback('Unable to connect to location',undefined)
    }
    
    else{    
    
        callback(undefined,response.body.current.weather_descriptions[0] +', It is currently '+ response.body.current.temperature +' degrees out and it feels like '+  response.body.current.feelslike + ' degrees out')
}
})

}







module.exports = weather