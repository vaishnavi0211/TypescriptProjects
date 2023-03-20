import * as promptSync from "prompt-sync"
const prompt=promptSync()

function secondMaximum(Arr:number[]):void
{
    Arr.sort()
    console.log("Second Maximum number is :"+Arr[Arr.length-2])
}

var array=new Array()
var i:number=0
var size=parseInt(prompt("Enter how many numbers you want to add :"))
for(i=0;i<size;i++)
{
    array[i]=parseInt(prompt('Enter element'+(i+1)+" : "))
}
console.log("The entered numbers are :"+array)
secondMaximum(array)