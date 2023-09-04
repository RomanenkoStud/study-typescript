type MyExclude<T, U> = T extends U ? never : T

//If T extends types from U then exclude that types from T
