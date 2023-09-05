type StartsWith<T extends string, U extends string> = 
    T extends `${U}${infer _}` ? true : false;

// takes two exact string types and returns whether `T` starts with `U`
