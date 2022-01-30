const me = {
    name: 'Luke Skywlaker',
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
let person;
const greet_person = (person) => console.log(person.name);
greet_person(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Chubaka', 'Work on the Web Site', 20);
const invTwo = new Invoice('Han Solo', 'Lickin princes pussy', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form'); //Casting
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
