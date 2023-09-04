type LengthOfString<S extends string, C extends string[] = []> = 
    S extends `${infer X}${infer Y}` 
        ? LengthOfString<Y, [...C, X]>
        : C["length"]

// compute the length of a string literal
