//練習問題
// 以下の配列で'price'の合計を求めてください。

const fruits = [
  {'id': 1, 'kind': 'apple', 'price': 100},
  {'id': 2, 'kind': 'orange', 'price': 80},
  {'id': 3, 'kind': 'grape', 'price': 200},
]

var price = fruits.reduce(function(pre, curr) {
   return pre + curr.price; 
}, 0);

console.log(price);