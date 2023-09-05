type CamelCase<S extends string> = S extends `${infer S1}_${infer S2}${infer S3}`
    ? Uppercase<S2> extends Lowercase<S2>
        ? `${Lowercase<S1>}_${CamelCase<`${S2}${S3}`>}`
        : `${Lowercase<S1>}${Uppercase<S2>}${CamelCase<S3>}`
    : Lowercase<S>

// converts `snake_case` string to `camelCase`
