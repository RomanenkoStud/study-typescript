type Permutation<T, C = T> = [T] extends [never]
    ? []
    : C extends infer U
        ? [U, ...Permutation<Exclude<T, U>>]
        : [] 

// transform union types into the array that includes permutations of unions
