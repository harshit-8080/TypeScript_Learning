interface Book {
  name: string;
  price: number;
  print: () => void;
}

class C1 implements Book {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  print() {
    console.log(`Name => ${this.name}, and Price => ${this.price}`);
  }
}

const o1 = new C1("harshit", 1000);
o1.print();
