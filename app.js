function alertMe() {
    alert('Hi!');
}


// The DOM
// document is your html
// window is the browser window (current tab)
// you can use these key words for methods like window.scrollTo()


window.innerHeight // give visible height of html window
window.outerHeight // gives height of entire browser window

window.localStorage // temporary data that is stored in the window

localStorage.setItem('test', 20);

window.scrollX // gives how much we've scrolled to the left
window.scrolly // gives how much we've scrolled up and down

/* Event listener

window.onscroll = function() {
    console.log('hi');
}

*/

// Using DOM API to add content to our html

const elementNode = document.createElement('p');
const textNode = document.createTextNode('Content');
const attributeNode = document.createAttribute('class');
attributeNode.value = 'some.class';

elementNode.appendChild(textNode);
elementNode.setAttributeNode(attributeNode);

document.body.appendChild(elementNode);

// three ways to return our second button
document.querySelector('button');
document.querySelector('#btn-1');
document.querySelector('.my-btn');


const btn = document.querySelector('#btn-1');

function addParagraph() {
    
    // console.log('the button is working')
    const randomNum = Math.floor(Math.random()*100);
    const pContent = 'The random number is: ' + randomNum;

    const newElement = document.createElement('p');
    newElement.textContent = pContent;

    document.body.appendChild(newElement);

}

// two new ways to add event listener to our button
//btn.addEventListener('click', addParagraph);
btn.onclick = addParagraph;


// accessing and changing our html elements plus children
const list = document.querySelector('ul');

list.children.item(1); // select the second item of our html list
const listItem = list.children.item(1);

listItem.textContent = 'some new content';

