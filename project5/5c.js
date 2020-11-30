

const person = {
    courses: ['APBD','TIN','GRK']
}

function CreateNewStudent(fname,lname,id)
{
    let NStudent=Object.create(person)
    NStudent.fname=fname;
    NStudent.lname=lname;
    NStudent.id=id;
    return NStudent;
}

var s1=new CreateNewStudent("John","Watson","EJ");
var s2=new CreateNewStudent("Elton","John","JC");

console.log(s1)
console.log(s2)