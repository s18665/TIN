function CheckPrime(number)
{
    for(var i = 2; i < number; i++)
        if(number % i === 0)
        {
            return false;
        }
    return true
}

console.log(CheckPrime(10))
console.log(CheckPrime(3))