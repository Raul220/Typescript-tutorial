// const anchor = document.querySelector('a')!; // ! at the end of the sentence means the i know that it could be a null value

// anchor && console.log(anchor.href);
// console.log(anchor.href);

// const form = document.querySelector('form')!; //when is selected by form or a, etc, ts knows the is HTMLFormElement || HTMLAnchorElement, etc

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