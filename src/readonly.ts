type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

//implements the built-in `Readonly<T>` generic 
//'readonly' keyword goes before property
