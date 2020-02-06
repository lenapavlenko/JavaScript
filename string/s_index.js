function count(str, letter){
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == letter){
      counter += 1;
    }
  }
  return counter;
}

var str = prompt('Введите строку:');
console.log (str);

var letter = prompt ('Введите заданую букву:');
console.log (letter);

console.log (count(str, letter));