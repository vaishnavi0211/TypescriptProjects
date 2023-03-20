import * as promptSync from "prompt-sync"

const prompt=promptSync()

var num=parseInt(prompt("Enter a number"))
var first:number=0
var second:number=1
var fib:number=0

for(var i=1;i<(num/2)-1;i++)
{
    console.log(first+" , ")
    fib=first+second
    first=second
    first=fib
}
