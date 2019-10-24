type A = {
    a: string;
    b: number;
};

type B = {
    c: string;
    d: number;
};

type C = A | B;

type D = A & B;

const testD: C = {a: "test", b: 2};

type Tuple = [number, string];

const array: Tuple = [1, "2"];

type Site = "samll" | "default" | "big";

type MapB = {
    small: string;
    default: number;
    big: string;
};

// type map2Set = keyof MapB; // => small | default | big
type map2Set = MapB[keyof MapB]; // => string | number | string

type set2Map = {
    [key in Site]: string;
};
// => type set2Map = {
//     small: string,
//     default: string,
//     big: string
// }

// map取索引值
type MapTest = {
    test: number;
};

type valueOfIndex = MapTest["test"]; // => number

type Person = {
    readonly name: string;
    age?: number;
};

const person: Person = {
    name: "John"
};

// person.name = "test"; // => get the error
