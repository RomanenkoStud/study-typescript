type Replace<S extends string, From extends string, To extends string> = 
    From extends ''
        ? S
        : S extends `${infer P}${From}${infer R}` 
            ? `${P}${To}${R}`
            : S

// replace the string `From` with `To` once in the given string `S`
