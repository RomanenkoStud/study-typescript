type Zip<T extends any[], U extends any[], L extends any[] = []> =  
    L['length'] extends T['length'] | U['length']
        ? L
        : Zip<T, U, [...L, [T[L['length']], U[L['length']]]]>

// type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
