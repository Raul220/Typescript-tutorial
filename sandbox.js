// explicit types
var character;
var age;
var isLoggedIn;
//character = 20;
character = 'Raul';
//age = true;
age = 32;
// arrays
var persons;
//persons = [10, 25];
//persons.push('Sony'); Can't do push because the array is not initialized, just declared that in the future gonna be an string array For that it could be let persons: string[] = [];
persons = ['Sauron', 'Gandalf', 'Frodo'];
persons.push('Sam');
// union types
var mixed = [];
mixed.push('Sam');
mixed.push(20);
//mixed.push(false);
console.log(mixed);
var uid;
uid = 123;
uid = '123';
//uid = false;
// objects
var someone;
someone = { name: 'Sam', age: 21 };
var another;
another = { name: 'Sam', age: 45, man: true };
