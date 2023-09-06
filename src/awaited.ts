/*
    189 - Awaited
    -------
    by Maciej Sikora (@maciejsikora) #easy #promise #built-in

    ### Question

    If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

    For example: if we have `Promise<ExampleType>` how to get ExampleType?

    ```ts
    type ExampleType = Promise<string>

    type Result = MyAwaited<ExampleType> // string
    ```

    > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

    > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */

type Thenable<T> = { then: (onfulfilled: (arg: T) => any) => any }

type MyAwaited<T extends Thenable<any> | Promise<any>> = 
    T extends Promise<infer U> ? U extends Promise<any> ? MyAwaited<U> : U 
    : T extends Thenable<infer R> ? R : never

//if not Promise and Thenable - error
//if Promise then check if inside Promise is Promise else return type inside
//if Thenable then return type inside
//finally never is never returned

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
    Expect<Equal<MyAwaited<Z1>, string | boolean>>,
    Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
