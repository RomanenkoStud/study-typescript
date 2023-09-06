/*
    3192 - Reverse
    -------
    by jiangshan (@jiangshanmeta) #medium #tuple

    ### Question

    Implement the type version of ```Array.reverse```

    For example:

    ```typescript
    type a = Reverse<['a', 'b']> // ['b', 'a']
    type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
    ```

    > View on GitHub: https://tsch.js.org/3192
*/

/* _____________ Your Code Here _____________ */
type Reverse<T extends any[], C = []> = 
    T extends [infer X, ...infer Y] 
        ? [...Reverse<Y>, X] 
        : C;

// implements the type version of ```Array.reverse```

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
    Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

type errors = [
    // @ts-expect-error
    Reverse<'string'>,
    // @ts-expect-error
    Reverse<{ key: 'value' }>,
]
