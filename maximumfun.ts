
function Maximum(num1:number,num2:number,num3:number):number
{
    var max=0
    if (num1>num2)
    {
        if(num1>num3)
        {
            max=num1   
        }
        else
        {
            max=num3
        }
    }
    else if(num2>num3)
    {
        max=num2
    }
    else
    {
        max=num3
    }
    return max
}



console.log("Maximum number is "+Maximum(23,89,6))

/*
var n1:number=23
var n2:number=89
var n3:number=6

console.log("maximum number from"+n1," "+n2," "+n3," "+Maximum(n1,n2,n3))*/
