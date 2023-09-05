type OmitByType<T, U> = {
    [P in keyof T as T[P] extends U ? never : P]: T[P];
};

// from ```T```, pick a set of properties whose type are not assignable to ```U```
