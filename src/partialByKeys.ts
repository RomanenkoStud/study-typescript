type IntersectionToObj<T> = {
    [K in keyof T]: T[K]
}

type PartialByKeys<T , K extends keyof T = any> = IntersectionToObj<{
        [P in keyof T as P extends K ? P : never]?: T[P]
    } & {
        [P in Exclude<keyof T, K>]: T[P]
    }>

// `K` specify the set of properties of `T` that should set to be optional
