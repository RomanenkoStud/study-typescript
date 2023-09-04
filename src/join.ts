type Join<T, U extends string | number> = 
    T extends [infer F, ...infer R]
        ? R['length'] extends 0
            ? `${F & string}`
            : `${F & string}${U}${Join<R, U>}`
        : ''

// implement the type version of Array.join
