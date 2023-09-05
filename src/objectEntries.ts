type ObjectEntries<T, U = Required<T>> = {
    [K in keyof U]: [K, U[K] extends never ? undefined : U[K]]
}[keyof U]

// implement the type version of ```Object.entries```
