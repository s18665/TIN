function LongestWord(word)
{
    word=word+" "
    var max="";
    var maxnum=0;
    var temp="";
    var tempnum=0;
    for (var i=0; i<=word.length; i++)
    {
        if(word[i]===" ")
        {
            if(tempnum>maxnum)
            {
                max=temp
                maxnum=tempnum
            }
            tempnum=0
            temp=""
        }
        else
        {
            tempnum++
            temp=temp+word[i]
        }
    }
    return max
}

console.log(LongestWord("ala ma kotka duzegooooo"))