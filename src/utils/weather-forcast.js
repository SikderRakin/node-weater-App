const request = require('postman-request');
const weatherstack=(latitude,longtitude,callback)=>{
    const mapBoxuri = `http://api.weatherstack.com/current?access_key=a3f52a876b0fdadfb35fd75ae6c365c6&query=`+ latitude +`,`+ longtitude +`&units=m`
request({url:mapBoxuri,json: true}, (error,response) => {

  if(error){
    callback("Cant Connect",undefined)
  }
  else if(response.body.error){
    callback("Unable To Find Location",undefined)
  }
  else{
      
      callback(undefined, {
        temperature : response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        descriptions :  response.body.current.weather_descriptions[0]
   
  }
)}
}
)}
module.exports=weatherstack