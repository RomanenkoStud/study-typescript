type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Last] ? 
    IsEqual<U, First> extends true ? 
        true : 
        Includes<Last, U> : 
    false

//recursive check of array, if not Equal return false
