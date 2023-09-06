/*
    645 - Diff
    -------
    by ZYSzys (@ZYSzys) #medium #object

    ### Question

    Get an `Object` that is the difference between `O` & `O1`

    > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */
type Diff<O, O1> = {
    [K in Exclude<keyof (O & O1), keyof(O | O1)>]: (O & O1)[K]
};

// type that represents the difference between O and O1
// including properties that are present in one type but not the other

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}
type Coo = {
    name: string
    gender: number
}

type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
