const inputbox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function AddTask()
{
if(inputbox.value==='')
{
    alert("please add something");
}
else{
    let li=document.createElement("LI");
    li.innerHTML=inputbox.value;
    listContainer.appendChild(li);
    let span=document.createElement("SPAN");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputbox.value='';
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