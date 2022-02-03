const me = {
    name: "Luke Skywlaker",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    },
};
let person;
const greet_person = (person) => console.log(person.name);
greet_person(me);
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Luke", "Socking under the Bridge", 50);
// docTwo = new Payment("Yoda", "Let Luke Socking under the Bridge", 1550);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice("Chubaka", "Work on the Web Site", 20);
// const invTwo = new Invoice("Han Solo", "Lickin princes pussy", 250);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
const form = document.querySelector(".new-item-form"); //Casting
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    doc =
        type.value === "invoice"
            ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
            : new Payment(tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
