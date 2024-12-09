function bonus(){
    let s=parseInt(document.getElementById("sal").value)
    let e=parseInt(document.getElementById("exp").value)
    let res=document.getElementById("tot")
    if (e>=5){
        let a=s*5/100
        let ts=a+s
        res.innerHTML=ts
    }      
    else{
        res.innerHTML='No Change'     
    }
}
function elebill(){
    let a=parseInt(document.getElementById("unit").value)
    let div=document.getElementById("div")

    if (a<=100){
        div.innerHTML=0
    }
    else{
        if (a<=200 && a>100){
            let up=a-100
            let ua=up*5
            div.innerHTML=ua
        }
        else{
            let ui=a-200
            let us=ui*10+500
            div.innerHTML=us
        }
    }
}

function div3(){
    let a=parseInt(document.getElementById("num").value)
    let com=document.getElementById("com")

    a=a%10
    let b=a%3
    if (a===0){
        com.innerHTML='this number is not divisible by 3'
    }
    else if (b===0){
        com.innerHTML='this number is divisible by 3'
    }
    else{
        com.innerHTML="this number is not divivsible by 3"
    }
        
}

function city(){
    let a=document.getElementById("city").value.toLowerCase()
    let dis=document.getElementById("dis")
    if (a==="delhi"){
        dis.innerHTML="monuments is : 'Redfort'"
    }
    else if (a==="agra"){
        dis.innerHTML="monuments is : 'Taj Mahal'"
    }
    else if (a==="jaipur"){
        dis.innerHTML="monuments is : 'jal mahal'"
    }      
    else{
        dis.innerHTML="Invalid"
    }
        
}

