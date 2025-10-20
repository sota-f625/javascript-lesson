// Q1. 変数

let nickname = "藤村蒼太";
let age = 30;
let greet = "私のニックネームは" + nickname + "です。年齢は" + age + "です。"

console.log(greet);


// Q2. 配列

let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let favorite = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(favorite);


// Q3. オブジェクト

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4. 配列 × オブジェクト

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
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// Q5. 四則演算

let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;

console.log(averageAge);