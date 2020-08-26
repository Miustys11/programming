///練習問題
//以下の配列を２倍した新たな配列を作成してください。
// number = [1,2,3,4,5];

// var numDouble = number.map(function(value) {
//   return value * 2; 
// });

// console.log(numDouble);

//以下の連想配列の'kind`だけの配列をmap関数を使って生成してください。
  const animals = [
    {'id': 1, 'category': 'animal', 'kind': 'dog'},
    {'id': 2, 'category': 'animal', 'kind': 'cat'},
    {'id': 3, 'category': 'animal', 'kind': 'bird'},
  ];

  var kind = animals.map(function(value) {
      // return value['kind'];
      return value.kind;
  })

  console.log(kind);
