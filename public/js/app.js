
var weatherForm = document.querySelector('form')
var search = document.querySelector('input')
var msg1 = document.querySelector('#msg1')
var msg2 = document.querySelector('#msg2')
 

weatherForm.addEventListener('submit',(e)=>{
e.preventDefault()

var location = search.value

fetch('/weather?address='+location).then((response)=>{
 response.json().then((data)=>{
     if(data.error){
        msg1.textContent = data.error
     }
     msg1.textContent = data.location
     msg2.textContent = data.forecastdata

 })

})

})

