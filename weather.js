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
  let rs = document.querySelectorAll('input[name="area"]');
  for (let r of rs) {
      if (r.checked) {        // r が選択されていたら
          console.log(r.id);
            let url ='https://www.nishita-lab.org/web-contents/jsons/openweather/' + r.id + '.json';
  axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
      }
  }


}
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  console.log(data);
	// data をコンソールに出力
	console.log(data.weather.description);

  let a =document.querySelector('h2#result');
  a.textContent= data.name+'(緯度：'+data.coord.lon+',経度：'+data.coord.lat+')の天気を表示します';

  let b=document.querySelector('p#tenki');

  let c=document.querySelector('p#kion');
  c.textContent='最高気温：'+data.main.temp_max+'℃,最低気温：'+data.main.temp_min+'℃';

  let d=document.querySelector('p#situdo');
  d.textContent='湿度：'+data.main.humidity+'%';

  let e=document.querySelector('p#kaze');
  e.textContent='風速：'+data.wind.speed+'m/s';


	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {

	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
