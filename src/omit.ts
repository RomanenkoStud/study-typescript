type MyOmit<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]: T[X]
}

// constructs a type by picking all properties from `T` and then removing `K`
