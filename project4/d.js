
function InOrder(word)
{
    var temp=""
    for (var j=33;j<126;j++)
    {
        for (var i=0; i<word.length; i++)
        {
            if(word.charCodeAt(i)===j)
            {
                temp=temp+word[i]
            }
        }
    }
    return temp
}

console.log(InOrder("webmaste"))