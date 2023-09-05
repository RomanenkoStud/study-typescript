type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

// `K` specify the set of properties of `T` that should set to Readonly
