type TupleToUnion<T, C = never> = 
    T extends [infer L, ...infer R] 
        ? TupleToUnion<R, C | L>
        : C

// covers the values of a tuple to its values union
