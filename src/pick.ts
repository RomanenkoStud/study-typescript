type MyPick<T, K extends keyof T> = {
    [X in K]: T[X];
}

//K has only keys that present in T
//New type includes K from T
