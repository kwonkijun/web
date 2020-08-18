const form = document.querySelector('.input-text > form');
const pendingContainer = document.querySelector('.pending-container');
const finishContainer = document.querySelector('.finish-container');

let pendingList = [];
let finishList = [];

function drawPendingList(schedule, id){
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const toFinishBtn = document.createElement('button');

    span.innerHTML = schedule;
    deleteBtn.innerHTML = 'X';
    toFinishBtn.innerHTML = '√';

    deleteBtn.addEventListener('click', deleteHandler);
    toFinishBtn.addEventListener('click', finishHandler);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(toFinishBtn);
    let scheduleObj = {
        'id' : parseInt(id),
        'text' : schedule
    }
    if(id === null){
        const date = new Date();
        li.id = date.getTime();
        scheduleObj.id = date.getTime();
    }else{
        li.id = id;
    }
    pendingList.push(scheduleObj); 
    pendingContainer.appendChild(li);    
    setLocalStorage();
   
}

function drawFinishList(schedule){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const toPendingBtn = document.createElement('button');

    span.innerHTML = schedule.text;
    deleteBtn.innerHTML = 'X';
    toPendingBtn.innerHTML = '☜';

    deleteBtn.addEventListener('click', deleteHandler);
    toPendingBtn.addEventListener('click', toPendingHandler);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(toPendingBtn);
    li.id = schedule.id;
    const scheduleObj = {
        'id' : parseInt(schedule.id),
        'text' : schedule.text
    }
    finishList.push(scheduleObj); 
    finishContainer.appendChild(li);    
    setLocalStorage();
}
function loadLocalStorage(){
    let prevPendingDatas = localStorage.getItem("PENDING");
    if(prevPendingDatas !== null){
        prevPendingDatas = JSON.parse(prevPendingDatas);
        prevPendingDatas.forEach(preavPendingData => {
            drawPendingList(preavPendingData.text, null);
        });  
    }
    let prevFinishDatas = localStorage.getItem("FINISH");
    if(prevFinishDatas !== null){
        prevFinishDatas = JSON.parse(prevFinishDatas);
        prevFinishDatas.forEach(prevFinishData => {
            drawFinishList(prevFinishData);
        });  
    }
}

function setLocalStorage(){
    localStorage.setItem("PENDING", JSON.stringify(pendingList));
    localStorage.setItem("FINISH", JSON.stringify(finishList));
}

function submitHandler(event){
    event.preventDefault();
    const scheduleContent = event.target[0].value;
    event.target[0].value = "";
    drawPendingList(scheduleContent, null);
}

function deleteHandler(event){
    const li = event.target.parentNode;
    const className = li.parentNode.classList[0];
    if (className === "pending-container"){
        pendingContainer.removeChild(li);
    }else{
        finishContainer.removeChild(li);
    }
    const cleanPendingList = pendingList.filter(function(schedule){
        return schedule.id !== parseInt(li.id);
    })
    pendingList = cleanPendingList;
    const cleanFinishList = finishList.filter(function(schedule){
        return schedule.id !== parseInt(li.id);
    })
    finishList = cleanFinishList;
    setLocalStorage();
}

function finishHandler(event){
    const span = event.target.parentNode.firstChild;
    const li = event.target.parentNode;
    pendingContainer.removeChild(li);
    const cleanList = pendingList.filter(function(schedule){
        return schedule.id !== parseInt(li.id);
    })
    pendingList = cleanList;
    const schedule = {
        'id' : li.id,
        'text' : span.innerText
    }
    drawFinishList(schedule);
}

function toPendingHandler(event){
    const span = event.target.parentNode.firstChild;
    const li = event.target.parentNode;
    deleteHandler(event);
    drawPendingList(span.innerText, li.id);
}
function submitEventListener(){
    form.addEventListener('submit', submitHandler);
}

function init(){
    loadLocalStorage();
    submitEventListener();
}

init();