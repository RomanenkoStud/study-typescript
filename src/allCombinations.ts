type ToUnion<S extends string> = S extends `${infer Char}${infer Rest}`
    ? Char | ToUnion<Rest>
    : never;

type AllCombinations<
    S extends string,
    S2 extends string = ToUnion<S>,
> = [S2] extends [never]
    ? ''
    : '' | {[K in S2]: `${K}${AllCombinations<never, Exclude<S2, K>>}`}[S2];

// return all combinations of strings which use characters from ```S``` at most once
