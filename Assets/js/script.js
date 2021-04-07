fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID={462077ad51fe0a40f0cb36111f01a7e6}')
  .then(response => response.json())
  .then(data => console.log(data));
