// step 2 we need a global structure to maintain complete todo list
// so we make a todo list in which we push  todoitem in step 1.
let todoList=[];
displayItems();


function addTodo(){
    // step 1 is to find the Text so that we add it in add button ,
    //  due to which we provide id to the input text and then find it using query selector.
    let inputElement =document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    // console.log(todoItem);
    todoList.push(todoItem);
    // now after add item in add box to empty the text box we perform...
    inputElement.value ='';
    
    displayItems();

}

function displayItems(){
    let displayElements = document.querySelector('#todo-items');
    // in this part it collect data from paragraph tag which id ="todo-items"
    // after collecting text or data it showing using...

    // first empty the  displayElements.innerText so that when add new word previous do not repeat.
     displayElements.innerText='';
    for(let i=0; i<todoList.length; i++){
        displayElements.innerText = displayElements.innerText + "\n" + todoList[i];
    }
    // call this method at starting point when page is load, and 2nd time when we add new item.
    
}