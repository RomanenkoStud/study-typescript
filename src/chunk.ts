type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
    Swap['length'] extends N
        ? [Swap, ...Chunk<T, N>]
        : T extends [infer K, ...infer L]
            ? Chunk<L, N, [...Swap, K]>
            : Swap extends [] ? Swap : [Swap]

//chunk type splits an array T into chunks of size N by recursively accumulating elements in Swap
//until a chunk of size N is formed, at which point it continues with the next chunk
//the resulting type is an array of arrays, where each sub-array represents a chunk of size N
