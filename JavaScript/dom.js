
// EXAMINE THE DOM

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);

// console.log(document.all[10]);

// Catching Elements using idetifies as id, class, & Tag

// getElementById, getElementsByClassName, getElementsByTagName,
// querySelector, querySelectorAll

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));

// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = '<h3>Hey, I changed you!</h3>'

// headerTitle.style.fontFamily = 'cursive';
// headerTitle.style.color = 'red'

// header.style.borderBottom = 'solid 5px yellow'


// GETELEMENTSBYCLASSNAME //

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items.length);
// console.log(items[0]);
// console.log(items[1]);

// items[1].textContent = 'Hello 2'
// items[2].style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'yellow';

// // change all the list items at one
// for(let i = 0; i < items.length; i++) {
//     items[i].style.color = 'red'
// }



// GETELEMENTSBYTAGNAME //

// const li = document.getElementsByTagName('li');
// console.log(li);

// li[0].style.fontFamily = 'cursive';


// QUERYSELECTOR -> id, className, tagName //

// id
// const header = document.querySelector('#main-header');
// console.log(header);

// // tagName - but only first instance
// const input = document.querySelector('input');
// console.log(input);

// // className - but only first instance
// const li = document.querySelector('.list-group-item');
// console.log(li);


// QUERYSELECTORALL //

// const li = document.querySelectorAll('.list-group-item');
// console.log(li);


// DOM TRAVERSALS //


// EVENTS - ES6 //

// add event listner

// step 1 - Grab the element
// const btn = document.getElementById('button');

// // step 2: element.addEventListener('event', function)
// btn.addEventListener('click', buttonClick);

// function buttonClick() {
//     alert('Button Click!')
// }

// Event Property | Event Parameter

const btn = document.getElementById('button');
var box = document.getElementById('box');

box.addEventListener('mouseover', runEvent);

function runEvent(e) {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}


