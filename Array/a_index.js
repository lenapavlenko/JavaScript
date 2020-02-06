let numbers = new Array();

for ( i = 0; i< 10; i++){
  numbers.push(Math.round(Math.random()*15))
}
    numbers.forEach(function(item, index, array){
      console.log(item);
    })

