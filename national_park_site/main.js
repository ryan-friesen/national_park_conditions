var weatherConditionsDeathValley = new XMLHttpRequest();
var deathValleyConditionsObj;

weatherConditionsDeathValley.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92328.json', true);
weatherConditionsDeathValley.responseType = 'text';
weatherConditionsDeathValley.send(null);

document.getElementById('death-valley-conditions').onclick = function() {
  
  if(weatherConditionsDeathValley.status === 200) {
    
    deathValleyConditionsObj = JSON.parse(weatherConditionsDeathValley.responseText);
    console.log(deathValleyConditionsObj);
    document.getElementById('death-valley-conditions').innerHTML = deathValleyConditionsObj.current_observation.temp_f + "°F" + deathValleyConditionsObj.current_observation.weather;
  }

};