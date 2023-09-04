type Absolute<T extends number | string | bigint> = 
    `${T}` extends `-${infer N}`
    ? N : `${T}`;

//if has minus extract value before minus, else return usual
