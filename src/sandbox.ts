// let greet : Function;

// Example 1

let greet : (a: string, b: string) => void;
greet = (name: string, greet: string) => console.log(`${name} says ${greet}`);

// Example 2

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    return action === 'add' ? numOne + numOne : numOne - numTwo;
}

// Example 3

let log_details: (obj: {name: string, age: number}) => void;
type man= {name: string, age: number};
log_details = (person: man) => console.log(`${person.name} is ${person.age} years old`);