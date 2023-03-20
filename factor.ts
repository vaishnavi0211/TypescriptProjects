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
    console.log("Factors of "+num," are "+factors_array.join(","))
    
    /*for(i=0;i<factors_array.length;i++)
    {
        console.log(factors_array[i]," ")
    }*/

}

var n1=parseInt(prompt("Enter a number: "))
Displayfactors(n1)
