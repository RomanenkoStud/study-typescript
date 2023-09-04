type MyParameters<T extends (...args: any[]) => any> = 
    T extends (...args: infer X) => any ? X : never

//extract parameters type using infer keyword
