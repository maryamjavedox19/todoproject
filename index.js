const addtaskcontainer=document.getElementById('add-task-container');
const addTask=document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask= document.getElementById('input-task');
const remainingItems=document.getElementsByClassName('remaining')[0];
const lightmode=document.getElementsByClassName('lightmode')[0];

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
completed.classList.add('completed');
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
     let checked=false;
     checkButton.addEventListener('click', function(){
        if(count==0){
            return;
        }

    if(checked==true){
        return;
    }
     checkButton.parentElement.style.textDecoration = "line-through";
     checked=true;
     count--;
        itemno.innerText = `${count} item left`;
    });


      //Active button function

      activebtn.addEventListener('click', function(){
        let taskElementsArray = document.getElementsByClassName('task');
        Array.prototype.forEach.call(taskElementsArray, function(element) {
           if(element.style.textDecoration === "line-through") {
            element.classList.add('hide');
          } else {
            element.classList.remove('hide');
          }
        });
      });



    // deleting all checked todos
    clearcmp.addEventListener('click', function(){
        let taskElementsArray = document.getElementsByClassName('task');
        // each task with line-through text decoration gets removed
        Array.prototype.forEach.call(taskElementsArray, function(element) {
            if(element.style.textDecoration == "line-through") {
                element.remove();
            }
        });
    });


    // showing completed task
    completed.addEventListener('click', function(){
        let taskElementsArray = document.getElementsByClassName('task');
        Array.prototype.forEach.call(taskElementsArray, function(element) {
            if(element.style.textDecoration !== "line-through") {
                element.classList.add('hide');
            }
        });
    });


        // showing ALL task   
        all.addEventListener('click', function(){
            let taskElementsArray = document.getElementsByClassName('task');
            Array.prototype.forEach.call(taskElementsArray, function(element) {
                if (element.classList.contains('hide')) {
                    element.classList.remove('hide');
                }
            });
        });     
        
});



// light mode
let islightmode=false;
lightmode.addEventListener('click', function(){
if(!islightmode){
    document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/168823.jpg'), url('white2.jpg')";
    islightmode=true;
    addtaskcontainer.style.backgroundColor="white";
    inputTask.style.backgroundColor="white";
    inputTask.style.color="black";
}

else{
    document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/168823.jpg'), url('black.jpg')";
    islightmode=false;
    addtaskcontainer.style.backgroundColor="rgb(37, 35, 35)";
    inputTask.style.backgroundColor="rgb(37, 35, 35)";
    inputTask.style.color="white";
}



})