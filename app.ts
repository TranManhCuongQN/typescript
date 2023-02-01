/**
 * Basic Type
 */
//* String
let car = "Toyota";
let bike: string;
bike = "Winner";

//* Number
let num: number = 10;

//* Boolean
let isLoading: boolean = true;

//* Undefined
let body: undefined = undefined;

//* Null
let footer: null;

//* any
let person: any;
person = 10;
person = "Nguyen Van A";
person = true;

//* Object
let house: {
  address: string;
  color?: string;
} = { address: "" };
house.address = "HCM";

//* Array
let products: any[] = [];
products.push(1610);
products.push("VietName");

//* string[]
let names = ["Alex", "Ben"];
let address: string[] = [];
address.push("HCM");

//* number[]
let numbers: number[] = [];
numbers.push(1, 2, 3);

//* object array
let people: {
  name: string;
  age: number;
}[] = [];
people.push({ name: "Alex", age: 20 });

//* function
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
sum(1, 2);

const sub: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 - num2;
};

/**
 * Union (Kết hợp các kiểu dữ liệu khác nhau)
 */
let price: string | number | boolean;
price = "10";
price = 20;
price = true;

let bodys: { name: string | number } | { firstName: string } = {
  name: 100,
};

/**
 * Enum
 */
enum Sizes {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}
let size = Sizes.S;

/**
 * Interface
 */
interface State {
  name: String;
  isLoading: boolean;
}

interface State {
  age: number;
}

let state: State = {
  name: "Cuong",
  isLoading: false,
  age: 20,
};
// Khi bạn khai báo 2 cái interface tên giống nhau thì cái interface cuối cùng là nó sẽ merge lại

/**
 * Type
 */
// Type khác interface ở chỗ là nó không thể merge lại 2 cái type tên giống nhau
type State1 = {
  name: string;
  isLoading: boolean;
};

const state1: State1 = {
  name: "Cuong",
  isLoading: false,
};

type Name = {
  name: string;
};

type Age = {
  age: number;
};
// merge type
type Person = Name & Age;

const handleCLick = <Type>(value: Type) => value;
let value = 100;
handleCLick<string>("100");

/**
 * Class
 */
class Person1 {
  public name: string;
  private age: number;
  // readonly: chỉ được đọc thôi không thể ghi vào
  readonly money: number = 40;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  handle() {
    // this.money = 100;  // error
    let value = this.money;
  }
}
const alex = new Person1("Alex", 20);
alex.name;

class Person2 {
  constructor(public name: string, private age: number) {}
}
