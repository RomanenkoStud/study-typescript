type FalseValues = 0 | false | '' | {[key: string]: never} | [] | undefined | null;

type AnyOf<T extends readonly any[]> = T[number] extends FalseValues ? false : true;

//`any` function
//if type not some of FalseValues type than AnyOf true
