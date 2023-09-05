type ParsePercent<T extends string> = T extends `${any}%` ? "%" : "";
type ParseSign<T extends string> = T extends `${infer S}${any}`
    ? S extends "+" | "-"
        ? S
        : ""
    : "";
type ParseNumber<T extends string> =
    T extends `${ParseSign<T>}${infer N}${ParsePercent<T>}` ? N : never;
type PercentageParser<A extends string> = [ParseSign<A>, ParseNumber<A>, ParsePercent<A>]

// result structure: [`plus or minus`, `number`, `unit`]
