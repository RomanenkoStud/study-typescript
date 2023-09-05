//type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: Awaited<T[P]>
}>

// function accepts an array of PromiseLike objects
// returning value should be `Promise<T>` where `T` is the resolved result array
