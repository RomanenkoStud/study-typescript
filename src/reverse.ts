type Reverse<T extends any[], C = []> = 
    T extends [infer X, ...infer Y] 
        ? [...Reverse<Y>, X] 
        : C;

// implements the type version of ```Array.reverse```
