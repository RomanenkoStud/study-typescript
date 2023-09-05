type StringToUnion<T extends string> = T extends `${infer Char}${infer Rest}`
    ? Char | StringToUnion<Rest>
    : never;

// type take string argument
// the output should be a union of input letters
