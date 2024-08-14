const inputBox=document.getElementById("input_box")
const listContainer=document.getElementById("list-container");
function AddTask()
{
    if(inputBox.value==='')
    {
        alert("You must write someting!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

//variable ceation using inputbox-id
//variable creation using ul-id
//function=>Addtask
//value box input id is not entered then it will be raise alert
//else
//create element li
//display that elemnt using innerhtml
//appened next elements of li
//create span element
//display span 
//li should be append by span