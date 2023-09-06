/*
    4499 - Chunk
    -------
    by キリサメ qianxi (@qianxi0410) #medium #tuple

    ### Question

    Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
    `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`

    ```ts
    type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
    type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
    type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
    ```

    > View on GitHub: https://tsch.js.org/4499
*/

/* _____________ Your Code Here _____________ */
type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
    Swap['length'] extends N
        ? [Swap, ...Chunk<T, N>]
        : T extends [infer K, ...infer L]
            ? Chunk<L, N, [...Swap, K]>
            : Swap extends [] ? Swap : [Swap]

//chunk type splits an array T into chunks of size N by recursively accumulating elements in Swap
//until a chunk of size N is formed, at which point it continues with the next chunk
//the resulting type is an array of arrays, where each sub-array represents a chunk of size N

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Chunk<[], 1>, []>>,
    Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
    Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
