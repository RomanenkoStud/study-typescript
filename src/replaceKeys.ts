
type ReplaceKeys<U, T, Y> = { 
    [X in keyof U]: 
        X extends T 
            ? X extends keyof Y 
                ? Y[X] 
                : never 
        : U[X]
}

// replace keys in union types, if some type has not this key, just skip replacing
