const person = {
    name: 'Adam',
    isHuman: false,
    isNamePalindome: function() {
        for (var i=0; i<this.name.length; i++)
        {
            if(this.name[i]!=this.name[this.name.length-1-i])
            {
                return false
            }
        }
        return true
    },
    printHumanity: function() {
        console.log('Am I human? '+this.isHuman);
    }
};

function PrintAllParameters(object)
{
    for(var propName in object) {
        propValue = object[propName]
        if(typeof (propValue)!='function')
        {
            console.log(propValue+" "+typeof (propValue));
        }
    }
}




console.log(person.name)
console.log(person.isHuman)
console.log(person.isNamePalindome())
person.printHumanity()
console.log("\n")
PrintAllParameters(person)