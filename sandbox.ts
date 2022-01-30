// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

//character = 20;
character = 'Raul';

//age = true;
age = 32;

// arrays

let persons: string[];

//persons = [10, 25];
//persons.push('Sony'); Can't do push because the array is not initialized, just declared that in the future gonna be an string array For that it could be let persons: string[] = [];
persons = ['Sauron', 'Gandalf', 'Frodo'];
persons.push('Sam');

// union types

let mixed: (number|string)[] = [];
mixed.push('Sam');
mixed.push(20);
//mixed.push(false);

console.log(mixed);

let uid: string|number;
uid = 123;
uid = '123';
//uid = false;

// objects

let someone: object;
someone = {name: 'Sam', age: 21};

let another: {
    name: string,
    age: number,
    man: boolean
};

another = {name: 'Sam', age: 45, man: true}