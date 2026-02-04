function test(a: number, b: number): number {
  return a + b;
}

// console.log(test(18, 20));

let data: string | number;
data = "rahul";
data = 10;

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let obj: User = {
  id: 1,
  name: "rahul",
  isAdmin: true,
};

function isEven(a: number): boolean {
  if (a) {
    return true;
  }
  return false;
}

function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello ${name}, age ${age}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

function discount(price: number, percent: number = 10): number {
  return price - 2;
}

interface product {
  id: number;
  title: string;
  price: number;
}

function printProduct(product: product): any {
  return product.id;
}

type Point = { x: number; y: number };

function distance(p: Point): number {
  return p.x + p.y;
}

enum role {
  ADMIN,
  USER,
  GUEST,
}

let Role: role = role.ADMIN;

type status = "success" | "error" | "loading";
let status: status = "success";

type carTypes = {
  brand: string;
  speed: number;
  accelerate(): void;
};
class Car implements carTypes {
  brand: string;
  speed: number;
  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
}

class BankAccount {
  private balance: number;
  constructor() {
    this.balance = 0;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}

let userInfo: [number, string] = [1, "rahul"];

function genreric<T>(a: T, b: T): T {
  return a;
}

let z = genreric<number>(10, 18);
// console.log(z);

let y = genreric<string>("hello", "rahul");
// console.log(y);

// function sum(n: number): number {
//   if (n <= 1) return 1;
//   let res = n + sum(n - 1);
//   return res;
// }

// let n = 5;
// console.log(sum(n));

// function sum(n: Array<number>): number {
//   if (n.length == 0) return 0;
//   if (n.length == 1) return n[0]!;
//   let val: number = n.pop() as number;
//   let res = val + sum(n);
//   return res;
// }

// let n = [1];
// console.log(sum(n));

// function fact(n: number): number {
//   if (n <= 1) return 1;
//   let res = n * fact(n - 1);
//   return res;
// }

// let n = 5;
// console.log(fact(n));
