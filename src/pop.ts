type Pop<T extends any[]> = 
    T["length"] extends 0 
        ? []
        : T extends [...infer R, infer _] ? R : never

// takes an Array `T` and returns an Array without it's last element
