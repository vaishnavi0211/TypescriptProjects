import * as promptSync from "prompt-sync"

const prompt=promptSync()
const pi=3.14

function circleArea(rad:number):number
{
    return(pi*rad*rad)
}

function squareArea(s:number):number
{
    return(s*s)
}

function rectangleArea(len:number,bre:number):number
{
    return(len*bre)
}

while (true)
{
    console.log("1.Square  2.Rectangle  3.Circle")
    var ch=parseInt(prompt("Enter your choice "))
    if (ch==1){
        squareArea(10)
    }
    else if(ch==2){
        rectangleArea(10,5)
    }
    else if(ch==3){
        circleArea(6)
    }
    else{
        break
    }
    break
}



//var rad=parseInt(prompt("Enter Radius of circle"))
//console.log("Area of circle is "+circleArea(rad))
