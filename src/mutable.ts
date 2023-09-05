type Mutable<T extends object> = {
    -readonly [K in keyof T]: T[K]
}

// makes all properties in ```T``` mutable (not readonly)
