// write js code here corresponding to matches.html

var matchdata=JSON.parse(localStorage.getItem("schedule"))
var filterv=document.querySelector("#filterVenue");
function displaymatch(data)
{
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(ele){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
td1.innerText=ele.matchnumber
        var td2=document.createElement("td")
td2.innerText=ele.teamA
        var td3=document.createElement("td")
td3.innerText=ele.teamB
        var td4=document.createElement("td")
td4.innerText=ele.date
        var td5=document.createElement("td")
td5.innerText=ele.venue
        var td6=document.createElement("td")
        td6.innerText="Add As Favourites"
        td6.style.color="blue"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            add2favorite(ele)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}

displaymatch(matchdata)


filterv.addEventListener("change",function(){
    if(filterv.value=="none")
    {
       displaymatch(matchdata)
    }
    else{
        var filtered=matchdata.filter(function(ele){
            return ele.venue==filterv.value
        })
        console.log(filtered)
        displaymatch(filtered)
    }
})
var favr8=[]
function add2favorite(element){
favr8.push(element)
localStorage.setItem("favourites",JSON.stringify(favr8))
}


