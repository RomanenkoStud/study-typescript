/*
    2257 - MinusOne
    -------
    by Mustafo Faiz (@fayzzzm) #medium #math

    ### Question

    Given a number (always positive) as a type. Your type should return the number decreased by one.

    For example:

    ```ts
    type Zero = MinusOne<1> // 0
    type FiftyFour = MinusOne<55> // 54
    ```

    > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */
type MinusOne<T extends number | bigint, C extends any[] = []> = 
    C["length"] extends T 
        ? C extends [...infer _, infer L]
            ? L
            : -1
        : MinusOne<T, [...C, C["length"]]>

// return the number decreased by one

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<1101>, 1100>>,
    Expect<Equal<MinusOne<0>, -1>>,
    Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]
