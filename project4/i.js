function amountTocoins (ammount, arr)
{
    toreturn=[]
    arr.sort(function(a, b){return b-a})
    place=0
    while (ammount>0)
    {
        if(ammount<=arr[arr.length-1])
        {
            if(ammount===arr[arr.length-1])
            {
                toreturn.push(arr[arr.length-1])
            }
            break;
        }

        if(ammount>arr[place])
        {
            toreturn.push(arr[place])
            ammount=ammount-arr[place]
        }
        else
        {
            place++
        }


    }
    return toreturn
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]))