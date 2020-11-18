const FactorialRec = function (num) {
    if (num === 0) {
        return 1;
    } else {
        return num * FactorialRec(num - 1);
    }
}

function FactorialIterative(num) {
    var base=1;
    for (var i = 1; i <= num; i++)
        base = base*i;
    return base;
}


console.log(FactorialRec(6))
console.log(FactorialIterative(6))