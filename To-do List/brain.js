const inputUser = document.querySelector('.input');
const button = document.querySelector('.btn');
const taskList = document.querySelector('.taskList');

button.addEventListener('click',function(e){
    e.preventDefault();
    console.log("clicked bro")
    if(inputUser.value === ''){
        alert('Enter any task first')
    }else{
        let li  = document.createElement('li');
        li.innerHTML= inputUser.value;
        taskList.appendChild(li)
        let span  = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span) 
    }
    inputUser.value = "";
    saveData();
})

taskList.addEventListener('click' , function(e){
    e.preventDefault();
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheacked");
        saveData();
    }
    else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)
//saves the data 
function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}
function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}
showData();