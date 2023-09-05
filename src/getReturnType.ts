type MyReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => infer R 
        ? R 
        : any

// implements the built-in `ReturnType<T>` generic without using it
