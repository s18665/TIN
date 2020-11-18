function BinarySearch(arr,val)
{
    startplace=0
    endplace=arr.length-1

    while (true)
    {

        midplace=Math.floor((startplace+endplace)/2)
        //console.log(startplace,endplace,midplace)

        if(arr[midplace+1]===val)
        {
            return midplace+1
        }

        if(arr[midplace]===val)
        {
            return midplace
        }
        else
        {
            if(arr[midplace]<val)
            {
                startplace=midplace
            }
            else
            {
                endplace=midplace-1
            }
        }


    }




}


arr=[0,10,15,99,103,199,204]


console.log(BinarySearch(arr,0))
console.log(BinarySearch(arr,10))
console.log(BinarySearch(arr,15))
console.log(BinarySearch(arr,99))
console.log(BinarySearch(arr,103))
console.log(BinarySearch(arr,199))
console.log(BinarySearch(arr,204))

