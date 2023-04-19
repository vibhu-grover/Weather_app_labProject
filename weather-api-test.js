import { WeatherAPI } from "./weather-api.js";


function testBuildURL(){
      const  weatherAPI = new WeatherAPI("New Delhi");
      weatherAPI.buildURL();
}

 async function testInvoke(){
    const weatherAPI = new WeatherAPI("New Delhi");
    weatherAPI.buildURL();
  
    const responseInJSON = await weatherAPI.invoke();
    console.log(responseInJSON);
}

//testBuildURL();
testInvoke();