type Thenable<T> = { then: (onfulfilled: (arg: T) => any) => any }

type MyAwaited<T extends Thenable<any> | Promise<any>> = 
    T extends Promise<infer U> ? U extends Promise<any> ? MyAwaited<U> : U 
    : T extends Thenable<infer R> ? R : never

//if not Promise and Thenable - error
//if Promise then check if inside Promise is Promise else return type inside
//if Thenable then return type inside
//finally never is never returned
