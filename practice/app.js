// 変数の基礎
let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';　//再代入できる
console.log(text);

//変数の基礎2
// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

//変数のメリット
let age = 23;
console.log(age);

//変数の未代入
let testText;
console.log(testText);

//変数の仕様
let again = '定義しました';
again = '再代入はできます';

//let again = '再定義します';  再定義できない

//定数
const constant = 'これは定数です';
//constant = '再代入できないです';

//データ型
let string = 'JavaScriptの練習';
console.log(string);

let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます";  //シングルクォーテーションかダブルクォーテーションかどちらを使用するか統一する
console.log(double);

//文字列型でできる操作【文字列の連結】
let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

//テンプレートリテラル
let template = 'テンプレートリテラル'; //　※　これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

//数値型(number型)
let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 225000;
let num2 = 4506930;
console.log(num1 + num2);

num1 = 226059;
num2 = 45069;
console.log(num1 - num2);

num1 = 30496403;
num2 = 4506102;
console.log(num1 * num2);

num1 = 9999;
num2 = 35;
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// 配列型(array型)
let name1 = 'John';
let name2 = 'Bob';
let name3 = 'Michael';
let name4 = 'Emma';
console.log(name1, name2, name3, name4);

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

// オブジェクト型(object型)

/*let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(John.bloodType);

*/

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

let vehicles = [
  {name: 'car', color: 'red', speed: 'normal'},
  {name: 'train', color: 'green', speed: 'fast'},
  {name: 'airplane', color: 'grey', speed: 'faster'},
];
console.log(vehicles);

let one = '1';
let two = 2;

console.log('one->', typeof one, one);
console.log('two->', typeof two, two);


let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');

// 関数型

function getArea(){
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea(1);
getArea(2);
getArea(3);

function getArea(radius){
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function getArea(radius){
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function getArea(radius){
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

function devide(x, y){

  if(y === 0){
    return;
  }
  return x / y;
}

function doFunc(collback) {
  console.log('doFuncが呼び出されました');
  collback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output);

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();

// 標準組み込みオブジェクト

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);


// 変数のスコープ

/*

// ローカル変数

myFunc()

function myFunc() {
  let userAge = 27;
  console.log(userAge); // => 27
}

console.log(userAge);   // => userAge is not defined（エラー）

// グローバル変数

let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される

*/

// 制御構文

/*
  IF文
if (条件式) {
  // 条件式がtrue（真）のときの処理
}

*/

let boolValue;

if(boolValue === true){
  console.log('trueです');
}else if(boolValue === false){
  console.log('falseです');
}else{
  console.log('真偽以外の値です');
}

console.log('処理が終わりました');

// 論理演算子

let numVal = 77;
let strVal = 'test';

if(numVal === 77 && strVal === 'test'){
  console.log('ラッキーセブン');
};

// 三項演算子

numVal === 77 ? console.log('ラッキー') : console.log('ノーラッキー');

// for文

/*

for (初期値; 繰り返しの条件式; 処理の後にされる式) {
  // ここに繰り返す処理を書きます。
}

*/

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for(let i = 0; i < arrayNum.length; i++) {

  sum += arrayNum[i];
};

console.log(sum);