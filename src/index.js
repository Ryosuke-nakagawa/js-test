/*
 *あいあい
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数上書き可能

// val1 = "var変数上書き";
// console.log(val1);

// // var変数は再宣言可能

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

//letは再宣言不可

// const val3 = "const変数";
// console.log(val3);

//val3 = "constあいあい" <=NG
//const val3 = "再宣言";<=NG

//constで定義したオブジェクトは再定義可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 33,
// };
// val4.name = "ジャン"
// val4.addres = "hiroshima"
// console.log(val4);
//constで定義した配列は再定義可能
// const val5 = ['dog','cat']
// val5[0] = "bird";
// val5.push("あんの")
// console.log(val5)

// テンプレート文字列

// const name = "ジャン";
// const age = 44;
// 「私の名前はジャンです。年齢は44歳です」
//従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

//テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//アロー関数

//従来
// function func1(str) {
//   str= str + "うんこ"
//   return str;
// }

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数

// const func2 = (str) => str;
// console.log(func2("func2デェぅ"));

//　分割代入
// const myProfile = {
//   name: "ジャケ",
//   age: 22,
// }

// const message1 = `名前は${myProfile.name}です。年齢${myProfile.age}だよ`
// console.log(message1)

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢${age}だよ`
// console.log(message2)

// const myProfile = ["ジャケ", 22]
// const message3 = `名前は ${myProfile[0]}です年れい${myProfile[1]}です`
// console.log(message3)

// const [name, age] = myProfile
// const message4 = `名前は${name},年齢は${age}`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`)
// sayHello("ペンソン");

// スプレッド構文
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// まとめる
//const arr2 = [1,2,3,4,5];
//const [num1, num2, ...arr2] = arr2;
