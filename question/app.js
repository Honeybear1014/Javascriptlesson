// Q1

let nickname = '関根悠';
let age = '25';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。');

// Q2

let languages = ['Javascript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash bros'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6

function sayHello() {
  console.log('Hello');
};

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

// Q7


  user.birthday = '2000-09-27';
  user.sayHello = function(){
    console.log('Hello!');
  };

console.log(user.birthday);
user.sayHello();

// Q8

let calc = {
  add: function(x, y){
    console.log(x + y);
  },
  subtract: function(x, y){
    console.log(x - y);
  },
  multiply: function(x, y){
    console.log(x * y);
  },
  divide: function(x, y){
    console.log(x / y);
  },
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);


// Q9

function remainder(x, y) {

  return x % y;

};

console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');

// Q10

/*
x is not definedエラーが表示される理由は、変数のスコープによって参照できない場所（関数内のローカル変数）から変数を参照しようとしたため。
*/


// 応用編問題

// Q1

console.log(Math.floor(Math.random() * (10)));

// Q2

setTimeout(function(){console.log('Hello World!')}, 3000);

// Q3

let num = -1;

if(num > 0) {
  console.log('num is greater than 0');
}else if(num < 0) {
  console.log('num is less than 0');
}else{
  console.log('num is 0');
}

// Q4

let numbers = [];

for(let i = 0; i < 100; i++) {

  numbers.push(i);

};
console.log(numbers);

// Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < 7; i++) {
  if(Number.isInteger(mixed[i]) && mixed[i] % 2 === 0) {
    console.log('even');
  }else if(Number.isInteger(mixed[i]) && mixed[i] % 2 === 1) {
    console.log('odd');
  }else{
    console.log('not number');
  };
};


