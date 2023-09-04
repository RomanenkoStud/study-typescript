type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
    ? S2 extends Uncapitalize<S2>
        ? `${Uncapitalize<S1>}${KebabCase<S2>}`
        : `${Uncapitalize<S1>}-${KebabCase<S2>}`
    : S;

// replace the `camelCase` or `PascalCase` string with `kebab-case`
// checks if the first character of S2 is already lowercase
// it means that it the same word as S1
// if not, it means it's the start of a new word
