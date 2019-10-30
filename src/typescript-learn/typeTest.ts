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

const testD: C = { a: "test", b: 2 };

type Tuple = [number, string];

const array: Tuple = [1, "2"];

type Site = "samll" | "default" | "big"; // Set

type MapB = {
    small: string;
    default: number;
    big: string;
}; // Map

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

//同态变换
type PartialTest = Partial<Person>; //

//set生成同类型的map(只能生成同类型)
type SizeSet = "small" | "default" | "big";

type SizeMap = Record<SizeSet, number>;
// type SizeMap = {
//     small: number,
//     default: number,
//     big: number
// }

//类型递归
type DeepReadOnly<T> = {
    readonly [P in keyof T]: DeepReadOnly<T[P]>;
};
//readonly [P in keyof T]: [DeepReadOnly<T[P]>]
type TestObject = {
    a: {
        b: {
            c: number;
        };
    };
};

type DeepTypeMap = DeepReadOnly<TestObject>;

const obj: DeepTypeMap = { a: { b: { c: 2 } } };
// obj.a.b.c = 2; will get type error

interface SomeProps {
    a: string;
    b: number;
    c: (e: MouseEvent) => void;
    d: (e: TouchEvent) => void;
}
// 如何得到 'c' | 'd' ？

type GetFixedParams<T, C> = {
    [P in keyof T]: T[P] extends C ? P : never;
}[keyof T];

type TestObj = GetFixedParams<SomeProps, Function> // "c" | "d"