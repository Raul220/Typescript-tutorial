import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
const form = document.querySelector(".new-item-form"); //Casting
/*
list template instance
*/
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
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
    list.render(doc, type.value, "end");
});
//GENERICS
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random()*100)
//   return {obj, uid};
// }
/* If Trait to get docOne.name or any atribute will get error
it doesn't recgnize attributes, so we can replace <T>(obj: T)
It cath what ever we pass to the function*/
// const addUID = <T>(obj: T) => {
//   let uid = Math.floor(Math.random()*100)
//   return {...obj, uid};
// }
// let docOne = addUID({ name: 'Luke', age: 70});
// console.log(docOne);
// console.log(docOne.name);
/* We can pass anything to the function include a string or etc */
// let docTwo = addUID('Hello')
// console.log(docTwo);
/* So we can extends from objrct <T extends object> */
const addUID = (obj) => {
    //The extends can be an obj with specific attr type <T extends { name: string }>
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let docTwo = addUID('Hello') Then we get an error because the function is waithing an object
let docThree = addUID({ name: "Han Solo", age: 76 });
console.log(`${docThree.name} has ${docThree.age} years old.`);
const docFour = {
    uid: 1,
    resource_name: 'Batimovil',
    data: { name: 'Bruce' }
};
const docFive = {
    uid: 2,
    resource_name: 'Shootgun',
    data: ['1', '2', '3']
};
