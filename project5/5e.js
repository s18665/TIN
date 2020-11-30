

class Student{
    constructor(first, last, id,array) {
        this.firstName = first;
        this.lastName = last;
        this.id = id;
        this.array = array;
        this.total=0;
        for (var x in this.array)
        {
            this.total=this.total+this.array[x]
        }

    }
    PrintData(){

        console.log(this.firstName + " " + this.lastName+" "+this.total/this.array.length)
    }
    get Avg(){
        return this.total/this.array.length;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }


}

s1=new Student("adam","klowal", 18665,[3,2,5,6])
s2=new Student("marc","twain",997,[1,2,1,1,1])

s1.PrintData()
s2.PrintData()
console.log(s1.Avg)

s1.fullName="alan prost"
console.log(s1.fullName)