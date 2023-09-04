type TupleToObject<T extends readonly (string|number)[]> = {
    [K in T[number]]: K;
}

//map a type array to an object type
//array element must be (string|number) type
