import * as promptSync from "prompt-sync"
const prompt=promptSync()

function Maximum(arr:number[]):number
{
    var max:number=Math.max(...arr)
    return max
}

var array=new Array()
var i:number=0
var size=parseInt(prompt("enter how many numbers you want to add :"))
for(i=0;i<size;i++)
{
    array[i]=parseInt(prompt('enter element'+(i+1)+" : "))
}
console.log("the entered numbers are :"+array)
console.log("Maximum number is :"+ Maximum(array))