type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends ''
        ? S
        : S extends `${infer P}${From}${infer R}` 
            ? `${P}${To}${ReplaceAll<R, From, To>}`
            : S

// replace the all the substring `From` with `To` in the given string `S`
