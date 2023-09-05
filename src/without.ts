type Without<T, U extends any[], C extends any[] = []> = 
    T extends [infer L, ...infer R] 
        ? L extends [...U][number]
            ? Without<R, U, [...C]> 
            : Without<R, U, [...C, L]> 
        : C

// takes an Array T, number or array U and returns an Array without the elements of U
