type Subsequence<T extends any[]> = 
    T extends [infer Head, ...infer Rest] 
        ? [Head, ...Subsequence<Rest>] | Subsequence<Rest>
        : [];

// given an array of unique elements, return all possible subsequences
