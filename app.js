// var orange = 100;
// var apple = 120;

// if(orange < apple){
// 	alert('みかんの値段がりんごより安い');
// }
// else if(orange == apple){
// 	alert('みかんとりんごが同じ値段');
// }
// else{
// 	alert('みかんの値段がりんごより高い');
// }


// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 2;
// 	count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
// 	num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// var int1 = 10;
// var int2 = 2;

// alert(int1 / int2);


// メイン部分
// var alertString;
// alertString = addString("Webcamp");

// 作成した関数を呼ぶ出す
// alert(alertString);

// 作成した関数
// function addString(strA){
// 	var addStr = "Hello " + strA;
// 	return addStr;
// }


// 入力ダイアログで値を入力する
// var promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);



var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

alert('あなたの選んだ手は' + user_hand + 'です。');


function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );

	if(js_hand_num == 0){
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if(js_hand_num == 2){
		js_hand = "パー";
	}

	return js_hand;
}