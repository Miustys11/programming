//練習問題
// 以下の連想配列でcategoryがfruitのもののみ取り出して配列にしてください。
const array = [
  {'id': 1, 'category': 'animal', 'kind': 'dog'},
  {'id': 2, 'category': 'fruit', 'kind': 'apple'},
  {'id': 3, 'category': 'fruit', 'kind': 'orange'},
  {'id': 4, 'category': 'animal', 'kind': 'dog'},
  {'id': 5, 'category': 'animal', 'kind': 'cat'},
  {'id': 6, 'category': 'fruit', 'kind': 'grape'},
]

// var fruit = array.filter(function(value) {
//     return value.category === 'fruit';
// });

// console.log(fruit);

//先ほどの配列でidが4以上のもののみ取り出してください。
var num = array.filter(function(value) {
   return value.id >= 4; 
});

console.log(num);