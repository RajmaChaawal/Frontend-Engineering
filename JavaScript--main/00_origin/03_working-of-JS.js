//Lecture 3 => Working of JS!
// 1 - Execution Context :
// -> An Execution Context is the environmentin which your code gets executed!
// -> There are two Execution Contexts : 1. Global (GEC) 2. Functional (FEC)

// -> When you run JS file for the first time :
// 1. A GEC is created!
// 2. GEC sets up :
//      -> A Global Object -> window in browsers!
//      -> Memory Space for al variables and functions!
// 3. Two phases in EC :
//  3.1. Creation Phase :
//      -> allocates memory for variables and functions!
//      -> var -> undefined!
//      -> let and const are set aside in TDZ!
//      -> Entire function definitions stored in memory!
//  3.2. Execution Phase :
//      -> Execution of each statement!
//      -> A function Execution Context in separately created, if a function is called!


// ~ This understanding of creating, stacking, and destroying EC's help you understand :
//  -> Why hoisting happens!
//  -> How closures keeps memory alive!
//  -> How event loop runs after synchronous code!