var city1 = {};

city1.name = "ГородN";
city1.population= 10000000;

var city2={ 
	name: "ГородM",
	population: 10**6};

function getName() {
  alert( this.name );
}
// используем одну и ту же функцию в двух объектах
city1.getName = getName;
city2.getName = getName;

city1.getName();
city2.getName();

/*Створіть методи exportStr () у кожного з 
	об'єктів. Цей метод повинен повертати інформацію 
	про місто в форматі «name = ГородN \ n population = 10000000 \ n». 
	Для другого міста буде рядок зі своїми значеннями. 
	Примітка: можна звертатися до кожного властивості 
	через цикл for / in, але методи об'єкта повертати не потрібно*/

function exportStr() {
  alert( "name = " + this.name+ "\n" + "population = "+ this.population + "\n");
}

city1.exportStr = exportStr;
city2.exportStr = exportStr;

city1.exportStr();
city2.exportStr();