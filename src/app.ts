//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Luke Skywlaker',
    age: 23,
    speak(text: string) {
        console.log(text);
    },
    spend(amount: number) {
        console.log(`I spend ${amount}`);
        return amount;
    }
}

let person : IsPerson;

const greet_person = (person: IsPerson) => console.log(person.name);

greet_person(me);

import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('Chubaka', 'Work on the Web Site', 20);
const invTwo = new Invoice('Han Solo', 'Lickin princes pussy', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement; //Casting
console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});