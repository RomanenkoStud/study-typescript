type Concat<
    T extends Array<any> | ReadonlyArray<any>, 
    U extends Array<any> | ReadonlyArray<any>
> = [...T, ...U]

//T and U is either array or tuple
