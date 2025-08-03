// Access the <body> element
const mybody = document.body;
console.log(mybody);

// Get element by ID: box-2
const box2 = document.getElementById('box-2');
console.log(box2);

// Get all <p> elements (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Get all elements with class 'random'
const randomBoxes = document.getElementsByClassName('random');
console.log(randomBoxes);

// Change inner HTML of box-1 to display a heading
const box1 = document.getElementById('box-1');
box1.innerHTML = "<h1>Hello</h1>";

// Change background color of box-3
const box3 = document.getElementById('box-3');
box3.style.backgroundColor = "coral";

// Add class 'round-border' to all elements with class 'box'
const allBoxes = document.getElementsByClassName('box');
for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].classList.add('round-border');
}

function myfunction(){
    console.log("i click it");
}
