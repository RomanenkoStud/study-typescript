type Chainable<O = {}> = {
    option<K extends string, V>(key: K extends keyof O ?
        V extends O[K] ? never : never
        : K, value: V): Chainable<Omit<O, K> & Record<K, V>>
    get(): O
}

//extend the current config type by the given key and value
//if key exist @ts-error
