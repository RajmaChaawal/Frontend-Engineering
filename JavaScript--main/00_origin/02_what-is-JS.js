//Lecture 2 => What really is JS?
// JAVASCRIPT is a : -
//      ~ High Level -> Highly Portable and very close to human language!
//      ~ Prototype based Obj-Oriented -> Object Oriented Programming!
//      ~ MultiiParadigm -> multiple approaches for programming!
//      ~ Interpreted / Just-in-Time Compiled -> Compiled and then Executed line-by-line!
//      ~ Dynamic -> datatype can change at runtime and not fixed!
//      ~ Single Threaded -> cannot execute multiple operations at a once!
//      ~ Garbade Collected -> automatically manages memory allocation and deallocation
//                  - programming language with : -
//                      ~ first class functinos -> functions that can be assigned to a variable and  can be passed to other functions!
//                      ~ non-blocking event-loop concurrency model!


// -> Originally meant to be used by browsers!
// -> Today, its everywhere :-
//  ~ Client-Side (Browser)
//  ~ Server Side (Node.js)
//  ~ Desktop Apps (Electron.js)
//  ~ Mobile Apps (React Native, Ionic)
//  ~ Games & Graphics (Canvas, WebGL, Three.js)
//  ~ AI & ML (TensorFlow.js)

// 1 - "Components of JS" :
// -> JS is an engine standardized by  ES2024, that every browser follows!
// -> JS engine contains a CallStack and Heap!
// -> The Callstack is responsible for code executes with execution context!
// -> Heap is responsible for String objects in an unstructured memory pool, that are necessit for our application!


// 2 - "Scope" :
// -> Space where a variable is visible!
// -> Type of Scopes in JS :
//  1. Global!
//  2. Functional!
//  3. Block Scope -> let/const inside {} are visible to that {} only!
//  4. Lexial Scope -> Nested functions have access to preceeding functions!
// -> Scope Chain is the hierarchical structure or order in which the engine searches for a variable in a code!

// 3 - Temporal Dead Zone -> zone where a variable is inaccessible for instance : let / const are hoisted but not initialized, you cannot use them before the declaration!

// 4 - Closure -> The storing of variables of outer functions, to be accessed later in inner functions!