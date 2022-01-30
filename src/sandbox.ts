 let greet = () => console.log('Hello world');

//  greet = 'Hello';

let func : Function;

// func = 'Hello';
func = () => console.log('Hello');

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    c ? console.log(c) : '';
}
//c? is an optional parameter
const add_1 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    c ? console.log(c) : '';
}
// when is initialized a parameter can't be optional parameter (?)
add(5, 6,);
add_1(4, 5);
add_1(4, 5, 20);

const minus = (a: number, b: number) => a + b;
const minus_1 = (a: number, b: number): number => a + b; // Cant expecify function return type 

let result = minus(7, 4);

// result = 'Hello';