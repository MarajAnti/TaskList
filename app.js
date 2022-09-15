
//Define UI Vars
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput= document.querySelector('#task');

//Load all event Listeners

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit', addTask);

}
//addTask function

function addTask(e){

if(taskInput.value=== ''){
    alert('Add a task');
}

//ne duam qe kur te shkruajme tasks te krijohet nje list
//create li element

const li=document.createElement('li');
li.className='collection-item';

//create text note and append to li
li.appendChild(document.createTextNode(taskInput.value));

//create new link
const link = document.createElement('a')

//add class
link.className= 'delete-item secondary-content';

//add icon html

link.innerHTML='<i class="fa fa-remove"></i>';

//append the lin to li

li.appendChild(link);

//append li to ul

taskList.appendChild(li);

console.log(li);

//clear the input

taskInput.value='';


    e.preventDefault();

}