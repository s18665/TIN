
function StudentConstructor(first, last, id,array) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.array = array;
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