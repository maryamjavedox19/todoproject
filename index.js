const addTask=document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask= document.getElementById('input-task');
const remainingItems=document.getElementsByClassName('remaining')[0];

// to track number of todo
let iteminfo = document.createElement('div');
iteminfo.classList.add('iteminfo');
let itemno = document.createElement('p');
iteminfo.appendChild(itemno);
let count=0;

// all button
let all=document.createElement('button');
all.innerHTML="All";
all.classList.add('itembtns');
iteminfo.appendChild(all);

// active button
let activebtn=document.createElement('button');
activebtn.innerHTML="Active";
activebtn.classList.add('itembtns');
iteminfo.appendChild(activebtn);

// completed button
let completed=document.createElement('button');
completed.innerHTML="Completed";
completed.classList.add('itembtns');
iteminfo.appendChild(completed);


// clear completed button
let clearcmp=document.createElement('button');
clearcmp.innerHTML="Clear Completed";
clearcmp.classList.add('itembtns');
iteminfo.appendChild(clearcmp);



// when new todo is added
addTask.addEventListener('click', function(){
let task=document.createElement('div'); 
task.classList.add('task');

//check button
let checkButton=document.createElement("button");
checkButton.innerHTML='<i class="fa fa-circle-thin" aria-hidden="true"></i>';
checkButton.classList.add('deleteTask');
task.appendChild(checkButton);


let li=document.createElement('li'); 
li.innerText=`${inputTask.value}`; 
task.appendChild(li);


if(inputTask.value===""){
     alert('Please Enter a Task');
}

else{
    iteminfo.classList.add('iteminfo');
    count++;
    itemno.innerText = `${count} item left`;
    taskContainer.appendChild(task);
    remainingItems.appendChild(iteminfo);
}

inputTask.value="";


    // when checked
     checkButton.addEventListener('click', function(){
     checkButton.parentElement.style.textDecoration = "line-through";
     count--;
        itemno.innerText = `${count} item left`;
    });


    // deleting completed tasks
   clearcmp.addEventListener('click', function(){
    const childElements = task.querySelectorAll('*');
    //     childElements.forEach(function(child){
    //         if(child.style.textDecoration = "line-through"){
    //             child.remove();
    //             child.classList.remove('task');
    //         }
    // })

    for(i=0; i<childElements; i++){
        if(childElements.style.textDecoration = "line-through"){
               childElements.remove();
    }
   }
});
        





});

