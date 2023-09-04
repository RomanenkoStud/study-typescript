type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

//takes an Array `T` and returns its last element
