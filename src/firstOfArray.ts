type First<T extends any[]> = T extends [] ? never : T[0]

//if array not empty return first element
