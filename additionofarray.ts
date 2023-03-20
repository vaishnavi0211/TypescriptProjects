import * as promptSync from "prompt-sync"
const prompt=promptSync()

function Summation(Arr:number[]):number
{
    var sum:number=0
    for(var i=0;i<Arr.length;i++)
    {
        sum=sum+Arr[i]
    }
    return sum
}

var array=new Array()
var i:number=0
var size=parseInt(prompt("Enter how many numbers you want to add :"))
for(i=0;i<size;i++)
{
    array[i]=parseInt(prompt('Enter element'+(i+1)+" : "))
}
console.log("The entered numbers are :"+array)
console.log("Addition of numbers is :"+ Summation(array))