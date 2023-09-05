type TupleToNestedObject<T, U> = 
    T extends [infer F,...infer R]
        ? {[K in F&string]:TupleToNestedObject<R,U>}
        :U

// tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively
