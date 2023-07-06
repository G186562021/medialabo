
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let b = document.querySelector('#print');
b.addEventListener('click', hantei);


function hantei() {
	let i = document.querySelector('input[name="kaitou"]');
	let answer = i.value;
  let p2 = document.querySelector('span#answer');	
  p2.textContent = answer;

  kaisu=kaisu+1;
  let p3 = document.querySelector('span#kaisu');	
  p3.textContent = kaisu;

let x=document.querySelector('span#kaisu');
let y=document.querySelector('span#answer');
let z=document.querySelector('p#result');
if(kaisu<4){
    if(answer==kotae){
    z.textContent='正解です。';
  } else if(answer>kotae){
    z.textContent='違います。もう少し小さいです。';
    } else {
      z.textContent='違います。もう少し大きいです。';
    } 
}else{
  z.textContent='答えは'+answer+'でした。すでにゲームは終わっています。';

}

}

// ボタンを押した後の処理をする関数 hantei() の定義

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する



