type BEM<B extends string, E extends string[], M extends string[]> =
    `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`;

//Implement `BEM<B, E, M>` which generate string union from these three parameters. 
//Where `B` is a string literal, `E` and `M` are string arrays (can be empty).
