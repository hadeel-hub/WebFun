

var count =1
var countElement = document.querySelector("#count");
console.log("countElement");

function inc (){
    count++;
    countElement.innerText="likes"+ count;
}