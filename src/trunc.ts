type Trunc<T extends string|number> = 
    `${T}` extends `${infer L}.${infer R}` 
        ? L extends ''
            ? '0' 
            : L 
        : `${T}`

// takes string or number and returns the integer part of a number by removing any fractional digits
