type IsUnion<T, C extends T = T> = 
    (T extends T ? C extends T ? true : unknown : never) extends true 
        ? false 
        : true;

// using distribution to check if union extends union element
// if true than T is union
