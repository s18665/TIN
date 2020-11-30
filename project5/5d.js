
function StudentConstructor(first, last, id,array) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.array = array;

    Object.defineProperties(this, {
        "average":
            {
                "get": function() {
                    total=0;
                    for (x in this.array)
                    {
                        total=total+array[x]
                    }
                    return total/array.length;
                }
            },
        "fullName":
            {
                "get": function()
                {
                    return this.firstname+" "+this.lastname;
                },
                "set": function(fullName)
                {
                    this.firstname = fullName.split(' ')[0];
                    this.lastname = fullName.split(' ')[1];
                }
            }
    })


    this.PrintData=function ()
    {
        total=0;
        for (x in this.array)
        {
            total=total+array[x]
        }

        console.log(this.firstName + " " + this.lastName+" "+total/array.length)
    }
}



const s1=new StudentConstructor("adam","klowal", 18665,[3,2,5,6])
const s2=new StudentConstructor("andzej","zaucha", 555,[3,2,5,1])
s1.PrintData()
s2.PrintData()

s1.fullName="Adam Asnyk"
console.log(s1.fullName)
console.log(s1.average)