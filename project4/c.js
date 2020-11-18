
function IsPalindrome(word)
{
    for (var i=0; i<word.length; i++)
    {

        if(word[i]!=word[word.length-1-i])
        {
            return false
        }
    }
    return true
}

console.log(IsPalindrome("kajak"))
console.log(IsPalindrome("alaniemakota"))