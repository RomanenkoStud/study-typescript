/*
    298 - Length of String
    -------
    by Pig Fang (@g-plane) #medium #template-literal

    ### Question

    Compute the length of a string literal, which behaves like `String#length`.

    > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */
type LengthOfString<S extends string, C extends string[] = []> = 
    S extends `${infer X}${infer Y}` 
        ? LengthOfString<Y, [...C, X]>
        : C["length"]

// compute the length of a string literal

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<LengthOfString<''>, 0>>,
    Expect<Equal<LengthOfString<'kumiko'>, 6>>,
    Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
