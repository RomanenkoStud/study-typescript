type MinusOne<T extends number | bigint, C extends any[] = []> = 
    C["length"] extends T 
        ? C extends [...infer _, infer L]
            ? L
            : -1
        : MinusOne<T, [...C, C["length"]]>

// return the number decreased by one
