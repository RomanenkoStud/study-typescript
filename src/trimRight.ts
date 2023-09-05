type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S;

// takes an exact string type and returns a new string with the whitespace ending removed
