import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplates.js";
const form = document.querySelector(".new-item-form"); //Casting
/*
list template instance
*/
const ul = document.querySelector('ul');
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
    list.render(doc, type.value, 'end');
});
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docSix = {
    uid: 1,
    resource_type: ResourceType.BOOK,
    data: { name: 'Song of Ice & Fire' }
};
const docSeven = {
    uid: 10,
    resource_type: ResourceType.FILM,
    data: { name: 'Silence of the Lambs' }
};
console.log(docSix, docSeven);
