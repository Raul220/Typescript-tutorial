let age: any = 25; // age for now is a number but in future can be another type
age= 'mean';
console.log(age);
age = true;
console.log(age);
age = {name: 'Buonasera'};
console.log(age.name);

let mixed: any[] = [];

mixed.push('Round');
mixed.push(54);
mixed.push(true);
mixed.push({name: 'LuRaulis', age: 23, skills: ['fuck', 'lick', 'win']});
console.log(mixed);

let obj: {name: any, age: any};

obj = {name: 'Vito', age: 25};
console.log(obj);

obj = {name: 25, age: '25'};
console.log(obj);