type LookUp<U extends {type: string}, T> = U extends {type: T} ? U : never;

// get the corresponding type by searching for the common `type` field in the union
