/*
    10 - Tuple to Union
    -------
    by Anthony Fu (@antfu) #medium #infer #tuple #union

    ### Question

    Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

    For example

    ```ts
    type Arr = ['1', '2', '3']

    type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
    ```

    > View on GitHub: https://tsch.js.org/10
*/

/* _____________ Your Code Here _____________ */
type TupleToUnion<T, C = never> = 
    T extends [infer L, ...infer R] 
        ? TupleToUnion<R, C | L>
        : C

// covers the values of a tuple to its values union

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
]
