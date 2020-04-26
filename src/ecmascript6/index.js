//Funciones con parametros por defecto
//ecmscript6
function mostrar(nombre = 'Noel') {
  console.log(nombre);
}

mostrar();
mostrar('Cesar');

//Mejoras en concatenación
//Clasico
let nombre1 = 'Noel';
let apellido = 'Callapiña';
let nombre_completo = nombre1 + ' ' + apellido;
console.log(nombre_completo);
//Ecmascript6
let nombre_completo2 = `${nombre1} ${apellido}`;
console.log(nombre_completo2);

//multinlinea sin usar \n
let lorem = 'frase epica \n';
+'continuacion de otra frase';
//ecmascript6 con comillas francesas
let lorem2 = `frase epica
otra frase epica`;

console.log(lorem);
console.log(lorem2);

//Objetos
let person = {
  name: 'noel',
  age: 37,
  country: 'peru',
};
//clasico
console.log(person.name, person.age, person.country);
//ecma: deestructurando
const { name, age, country } = person;
console.log(name, age, country);

//Operador de propagación.
let team = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yessica', 'camila'];

//ecma6: propoga todo un arreglo con ...
let educacion = ['david', ...team, ...team2];

console.log(educacion);

//let: solo disponible en el scope.
//var: usado antes, era global
{
  var globalvar = 'uno';
}
{
  let globallet = 'dos';
  console.log(globallet); //solo funciona en este scope
}
console.log(globalvar);
console.log(globallet);

//ecma agregó const

//propiedad objetos mejorada

let name = 'noel';
let age = '37';

obj = { name: name, age: age };
//ecma6
obj2 = { name, age };
console.log(obj2);

//arrow function
const names = [
  { name: 'oscar', age: 32 },
  { name: 'yessica', age: 27 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//ecma6
let listOfNames2 = names.map((item) => console.log(item.name));

/*
const x = (name,age,county)=>{
    ...
}

const y = name => {
    ....
}

const z =num=>num*num;
*/

//promesas  => evitan el callback hell de los programadores
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey');
    } else {
      reject('ups');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Clases - herencia
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(valorA, valorB) {
    this.valueA = valorA;
    this.valueB = valorB;
    return this.valueB + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sumar(2, 2));

//import
import { hello } from './module';
hello();

//generators: fibonacci
function* helloWorld() {
  if (true) {
    yield 'hello,';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
