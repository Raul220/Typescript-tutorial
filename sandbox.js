var character = 'Raul';
var age = 32;
var isBlackBelt = false;
//character = 20; not possible becouse strict variable type
character = 'Cynthia';
//age = 'Belt';
age = 28;
//isBlackBelt = 20;
isBlackBelt = true;
console.log("".concat(character, " has ").concat(age, " years and ").concat(isBlackBelt ? 'has a black belt.' : 'does not have a black belt'));
//const circle = diameter => diameter * Math.PI; no maters what type of parameter pass to de function
//console.log(circle('Hello')); NaN Response
var circle = function (diameter) { return diameter * Math.PI; }; //defining type of the parameter
console.log(circle(5));
