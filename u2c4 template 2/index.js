// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",storedata)

var collection=JSON.parse(localStorage.getItem("schedule"))||[];

function storedata()
{
    event.preventDefault()
var obj={
    matchnumber:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
}
console.log(obj)
collection.push(obj)

localStorage.setItem("schedule",JSON.stringify(collection))
}