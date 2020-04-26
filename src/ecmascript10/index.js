//junio 2019
//flat
let array = [1, 2, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()); //profundidad 1
console.log(array.flat(2)); //profundidad 2
console.log(array.flat(3)); //profundidad 3

//flat map
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

//String trimStart

let hello = '               hello world';

console.log(hello);
console.log(hello.trimStart());

//String  trimEnd
let hello = 'hello world            ';

console.log(hello);
console.log(hello.trimEnd());

//option catch sin error declarado explicito.
/* 
try {
    
} catch  {
    
}
*/

//transformar arreglos a objetos:fromEntries
let entries = [
  ['name', 'oscar'],
  ['age', 32],
];

console.log(Object.fromEntries(entries));

//simbolo
let mySymbol = 'My simbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

//TC39 => grupo desarrolladores que evaluan los ecmascript
