import * as promptSync from "prompt-sync"

const prompt=promptSync()
var factors_array:number[]=[1] 
function Displayfactors(num:number):void
{
    var i:number=1
    for(i=2;i<=num;i++)
    {
        if (num%i==0)
        {
            factors_array.push(i)
        }
    }
    if (factors_array.length==2)
    {
        console.log(num ," is a prime number")
    }
    else
    {
        console.log(num," is not a prime number ")
    }
}

var n1=parseInt(prompt("Enter a number: "))
Displayfactors(n1)
