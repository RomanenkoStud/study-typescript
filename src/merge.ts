type Merge<F extends {}, S extends {}> = {
    [P in keyof F | keyof S]: P extends keyof S
        ? S[P]
        : P extends keyof F
        ? F[P]
        : never;
};

// merge two types into a new type
// keys of the second type overrides keys of the first type
