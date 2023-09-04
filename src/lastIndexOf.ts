type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
		? true
		: false;

type LastIndexOf<T extends any[], U> =
    T extends [...infer I,infer L]
        ? IsEqual<L, U> extends true
            ? I['length']
            : LastIndexOf<I,U> 
        : -1;

// the type version of ```Array.lastIndexOf```
