"use strict";
// const anchor = document.querySelector('a')!; // ! at the end of the sentence means the i know that it could be a null value
// anchor && console.log(anchor.href);
// console.log(anchor.href);
// const form = document.querySelector('form')!; //when is selected by form or a, etc, ts knows the is HTMLFormElement || HTMLAnchorElement, etc
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
