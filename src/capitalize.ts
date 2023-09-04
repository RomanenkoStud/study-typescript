type MyCapitalize<S extends string> = S extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : '' 

//converts the first letter of a string to uppercase and leave the rest as-is
