import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement; //Casting

/* 
list template instance
*/
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  doc =
    type.value === "invoice"
      ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
      : new Payment(tofrom.value, details.value, amount.valueAsNumber);

  list.render(doc, type.value, 'end');
});

//ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource <T> {
  uid: number;
  resource_type: ResourceType;
  data: T; 
}
const docSix: Resource<object> = { 
  uid: 1,
  resource_type: ResourceType.BOOK,
  data: { name: 'Song of Ice & Fire' }
};
const docSeven: Resource<object> = {
  uid: 10,
  resource_type: ResourceType.FILM,
  data: {name: 'Silence of the Lambs'}
}

console.log(docSix, docSeven);