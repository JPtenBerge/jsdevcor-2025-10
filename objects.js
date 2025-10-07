let suffix = "name";
let obj = {
  x: 24,
  y: "hoi",
  ["first" + suffix]: "tB",
  y: 123456,
  doe() {},
  birthYear: 2002,
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
};
obj.z = "123456";
delete obj.y;
console.log(obj);
console.log(obj.age);

let obj2 = new Date();
obj2.z = "123456";
console.log(obj2);

// factory function
function createCustomer(partialCustomer) {
  return {
    name: "JP",
    age: 24,
    ...partialCustomer,
  };
}
