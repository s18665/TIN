function sorter(array)
{
    if (array.length<2) return false;
    array.sort()
    return [array[1], array[array.length-2]];
}


var owoce = [1,2,3,4,5,6,7];
console.log(sorter(owoce))