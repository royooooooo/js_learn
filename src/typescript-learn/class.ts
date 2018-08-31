interface Person {
    firstName: string;
    lastName: string;
}

class Student{
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + "   " + lastName;
    }
}

function greeter(person: Person) {
    console.log(person)
}

let user_class = new Student("roy","foo")

greeter(user_class)