/*
    612 - KebabCase
    -------
    by Johnson Chu (@johnsoncodehk) #medium #template-literal

    ### Question

    Replace the `camelCase` or `PascalCase` string with `kebab-case`.

    `FooBarBaz` -> `foo-bar-baz`

    For example

    ```ts
    type FooBarBaz = KebabCase<"FooBarBaz">
    const foobarbaz: FooBarBaz = "foo-bar-baz"

    type DoNothing = KebabCase<"do-nothing">
    const doNothing: DoNothing = "do-nothing"
    ```

    > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */
type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
    ? S2 extends Uncapitalize<S2>
        ? `${Uncapitalize<S1>}${KebabCase<S2>}`
        : `${Uncapitalize<S1>}-${KebabCase<S2>}`
    : S;

// replace the `camelCase` or `PascalCase` string with `kebab-case`
// checks if the first character of S2 is already lowercase
// it means that it the same word as S1
// if not, it means it's the start of a new word

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
