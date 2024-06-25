function createNullObj() {
  return Object.create(null);   
}

const obj = createNullObj();

console.log(Object.getPrototypeOf(obj));
