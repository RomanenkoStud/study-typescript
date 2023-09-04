type EndsWith<T extends string, U extends string> = 
    T extends `${infer X}${U}` ? true : false

// returns whether `T` ends with `U`
