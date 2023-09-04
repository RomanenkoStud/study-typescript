type Flip<T extends Record<string, string | number | boolean>> = {
    [K in keyof T as `${T[K]}`]: K 
}

// flips the keys and values of object
