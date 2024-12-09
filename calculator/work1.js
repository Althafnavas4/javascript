function add(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    let res=document.getElementById("res")
    res.innerHTML=a+b
}
function sub(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    let res=document.getElementById("res")
    res.innerHTML=a-b
}
function mul(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    let res=document.getElementById("res")
    res.innerHTML=a*b
}
function div(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    let res=document.getElementById("res")
    res.innerHTML=a/b
}
function mod(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    let res=document.getElementById("res")
    res.innerHTML=a%b
}