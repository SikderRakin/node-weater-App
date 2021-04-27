
const weaterFrom=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')

weaterFrom.addEventListener('submit',(e) =>{

  e.preventDefault()
  fetch('http://localhost:3000/weather?address='+search.value).then((response)=>{
    response.json().then((data)=>{
      if(data.error){
          return message1.textContent='Location Not Found'
         
      }else
      {
     
        message2.textContent='In '+data.location+ ' weather is '+data.weatherstackdata.descriptions+' temperature is '+ data.weatherstackdata.temperature+' its feel like'+data.weatherstackdata.feelslike
        console.log(data.weatherstackdata.temperature)
        
      
      }
    })
    
    })

} )



