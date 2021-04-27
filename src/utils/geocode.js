const request = require('postman-request');
const geocode=(address,callback)=>{
    const mapBoxuri = `https://api.mapbox.com/geocoding/v5/mapbox.places/`+encodeURIComponent(address)  +`.json?access_token=pk.eyJ1IjoicmFraW5sZW8iLCJhIjoiY2tuaGI4d3c2MGliZzJwbHd2MXhva3p1bSJ9.L_L3XbZat1HQ7p68oDcZFg&limit=1`
request({url:mapBoxuri,json: true}, (error,response) => {

  if(error){
    callback("Cant Connect",undefined)
  }
  else if(response.body.features.length <= 0){
    callback("Unable To Find Location",undefined)
  }
  else{
      
      callback(undefined, {
        longtitude : response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
       location :   response.body.features[0].place_name
   
  }
)}
}
)}
module.exports=geocode