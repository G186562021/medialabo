let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let b = document.querySelector('#print');
b.addEventListener('click', kensaku);
function kensaku() {
	let i = document.querySelector('input[name="area"]');
	let area = i.value;
  let p2 = document.querySelector('span#basyo');	
  p2.textContent = area;
console.log("場所:"+data.name); 
for(n of data.weather){
  console.log("天気:"+ n.description);
} 
console.log("最高気温:"+data.main.temp_max); 
console.log("最低気温:"+data.main.temp_min); 
console.log("湿度:"+data.main.humidity); 
console.log("風速:"+data.wind.speed); 
console.log("風向き:"+data.wind.deg); 
}