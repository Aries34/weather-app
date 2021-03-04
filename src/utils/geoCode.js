const request = require('request')



var geoCode = (address,callback) =>{

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia3dha3VkdWFoNzciLCJhIjoiY2tsaDl3ZnZyMW5zeTJ5bWdjeXR6a29haSJ9.2Lff5wyUrXoFNzSQP_CeSA'
request({url:url2,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect to geolocation services',undefined)
    }else if(response.body.FeatureCollection === 0){
        callback('Unable to find geolocation',undefined)
    }else{
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name    
        })
    }
})
}


 module.exports = geoCode
