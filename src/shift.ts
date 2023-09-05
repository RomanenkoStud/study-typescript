type Shift<T extends any[]> = T extends [infer _, ...infer R] ? R : [];

// implements the type version of ```Array.shift```
