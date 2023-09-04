type Flatten<T extends any[]> = 
    T extends [infer F, ...infer R] 
        ? F extends any[] 
            ? [...Flatten<F>, ...Flatten<R>]
            : [F, ...Flatten<R>]
        : T

// takes an array and emitted the flatten array type