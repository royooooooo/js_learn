interface Person1 {
    name: string;
    age: number;
}

function printPerson(person: Person1) {
    console.log(person);
}

let roy = { name: "Roy", age: 10 }

printPerson(roy)