//object.entries
const data = {
  frontend: 'oscar',
  backend: 'isabel',
  desing: 'ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//objet.values
const data = {
  frontend: 'oscar',
  backend: 'isabel',
  desing: 'ana',
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));

//ending comas o trailling comas
const obj = {
  name: 'oscar',
};

//async / await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log('helloAsync', hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log('anotherFunction', hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
