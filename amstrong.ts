import * as promptSync from "prompt-sync"
const prompt=promptSync()

var num=prompt("Enter a number :")
var n=num.length
var i,sum=0

for(i=0;i<n;i++)
{
    sum=sum+Math.pow(num[i],3)
}

if(sum==num)
{
    console.log(num+" is armstrong number")
}
else
{
    console.log(num+" is not a armstrong number")
}