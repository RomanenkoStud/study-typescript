type Include<T extends unknown[], U> = T extends [infer Head, ...infer Tail]
    ? IsEqual<Head, U> extends true
        ? true
        : Include<Tail, U>
    : false

type Unique<T, F extends any[] = []> = 
    T extends [infer L, ...infer R] 
        ? Unique<R, Include<F, L> extends true ? F : [...F, L]> 
        : F

//takes an Array T, returns the Array T without repeated values
