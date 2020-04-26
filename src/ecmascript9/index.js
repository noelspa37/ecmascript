//junio 2018

//operador de reposo
const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all);

//utilizando propagacion para unir
const obj = {
  name: 'oscar',
  age: 32,
};

const obj1 = {
  ...obj,
  country: 'MX',
};

console.log(obj1);

//promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizó'));

//mejoras regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
