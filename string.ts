function ChkString(s:string):void
{
    var str:string="Pune Kothrud Marvellous Infosystem"
    var temp:number=0
    temp=str.search(s)
    if(temp==-1)
    {
        console.log("String does not contains "+s," in it")
    }
    else
    {
        console.log("String contains "+s," in it")
    }
}

var keystring:string='Marvellous'
ChkString(keystring)

