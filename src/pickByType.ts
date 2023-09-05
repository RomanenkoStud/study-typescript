type PickByType<T, U> = {
    [X in keyof T as T[X] extends U ? X : never]: T[X];
}

// from `T`, pick a set of properties whose type are assignable to `U`
