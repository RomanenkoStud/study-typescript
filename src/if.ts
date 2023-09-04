type If<C extends true | false, T, F> = C extends true ? T : F

//C is either true or false
//if C is true then return T, else return F
