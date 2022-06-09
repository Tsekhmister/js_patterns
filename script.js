//Singleton - это порождающий паттерн, который гарантирует что у класса есть только один экземпляр

class DataBase {
  url;
  static instance;

 constructor() {
  if (DataBase.instance) {
    return DataBase.instance;
   }
   this.url = Math.random();
   DataBase.instance = this;
 }
}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1)
console.log(db2)
console.log(db2 === db1)

//||||||||||||||||||// 
let instance;

class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCounter1 = new Counter();
const myCounter2 = new Counter();

myCounter1.increaseCount();
myCounter1.increaseCount();
myCounter2.increaseCount();
myCounter2.increaseCount();

console.log(myCounter1.getCount());
console.log(myCounter2.getCount());
console.log(myCounter2 === myCounter1 );
//

//Factory method - создание класса, который будет помогать создавать определенныеобъекты на основании каких либо данных