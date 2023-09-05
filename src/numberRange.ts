type NumberArray<H, C extends any[] = []> = 
    C["length"] extends H 
        ? C 
        : NumberArray<H, [...C, C["length"]]>

type NumberRange<L, H> = 
    NumberArray<H> extends [...NumberArray<L>, ...infer R] 
        ? [...R, H][number] 
        : never 

// returns the range of numbers as union
