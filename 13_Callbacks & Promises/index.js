console.log("Hari om");
console.log("Hari om ji");

setTimeout(() =>{
    console.log("Hari om shiv ji");
},2000);

console.log("The End");

// order of output is: Hari om
// index.js:2 Hari om ji
// index.js:8 The End
// index.js:5 Hari om shiv ji
