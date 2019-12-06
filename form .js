
// var a=document.getElementById("nam").value
// var b=document.getElementById("age").value
// document.getElementById("tbody").innerHTML+="<tr><td>" +a +"</td>" +"<td>"+ b + "</td>" +"</tr>"

function add(){
var a=document.getElementById("nam").value
var b=document.getElementById("age").value
var c=document.getElementById("con").value
var d=document.getElementById("st").value
var e=document.getElementById("cty").value
var f=document.querySelector('input[name="gender"]:checked').value
var g=document.querySelector('input[name="marr status"]:checked').value
var skill=[]
document.getElementsByName("skills[]").forEach( function (elem){
    console.log(elem.value)
 if(elem.checked){
     skill.push(elem.value)
 }
})
var obj={
    name:a,
    age:b,
    con:c,
    st:d,
    cty:e,
    gender:f,
    ms:g,
    skills:skill
}
var table=[]
table.push(obj)
// console.log(table)
table.forEach( function (elem){
     console.log(elem.name)
     console.log(elem.age)
     console.log(elem.con)
     console.log(elem.st)
     console.log(elem.cty)
     document.getElementById("tbody").innerHTML+="<tr><td>" +elem.name +"</td>" +"<td>"+ elem.age + "</td>" + "<td>"+ elem.con + "</td>" + "<td>"+ elem.st + "</td>" + "<td>"+ elem.cty+ "</td>" + "<td>"+ elem.gender + "</td>" + "<td>"+ elem.ms + "</td>" + "<td>"+ elem.skills + "</td>" +"</tr>"
}
)
console.log( table[0])
}









