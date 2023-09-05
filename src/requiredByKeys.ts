type RequiredByKeys<T, K extends keyof T = keyof T> = 
    Omit<Required<Pick<T, K>> & Omit<T, K>, never>

// `K` specify the set of properties of `T` that should set to be required
