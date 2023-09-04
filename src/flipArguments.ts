type FlipArray<T, C = []> = T extends [infer X, ...infer Y] ? [...FlipArray<Y>, X] : C;

type FlipArguments<T extends Function> = 
    T extends (...args: infer X) => infer R 
        ? (...args: FlipArray<X>) => R 
        : never;

//returns a new function with reversed parameters
