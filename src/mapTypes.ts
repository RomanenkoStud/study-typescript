type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
    [X in keyof T]: T[X] extends R["mapFrom"] 
        ? R extends { mapFrom: T[X] } 
            ? R["mapTo"] 
            : never
        : T[X]
}

// transform types in object T to different types defined by type R
