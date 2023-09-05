type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? TrimLeft<L> : S;

// takes an exact string type and returns a new string with the whitespace beginning removed
