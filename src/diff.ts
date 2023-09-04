type Diff<O, O1> = {
    [K in Exclude<keyof (O & O1), keyof(O | O1)>]: (O & O1)[K]
};

// type that represents the difference between O and O1
// including properties that are present in one type but not the other
