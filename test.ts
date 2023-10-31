//1
// class Car {
//   public company: string;
//   public model: string;
//   private year: number;
//   private fuelType: string;

//   constructor(company: string, model: string, year: number, fuelType: string) {
//     this.company = company;
//     this.model = model;
//     this.year = year;
//     this.fuelType = fuelType;
//   }

//   public get age(): number {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   }

//   public getInfo(): string {
//     return `Company: ${this.company}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
//   }
// }

// const car = new Car("Toyota", "Camry", 2021, "Gasoline");
// console.log(car.age);
// console.log(car.getInfo());


// 2
// class Product {
//   public name: string;
//   public price: number;
//   public quantity: number;

//   constructor(name: string, price: number, quantity: number) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   public totalPrice(): number {
//     return this.price * this.quantity;
//   }

//   public add(quantity: number): void {
//     this.quantity += quantity;
//   }

//   public sell(quantity: number): void {
//     if (this.quantity >= quantity) {
//       this.quantity -= quantity;
//     } else {
//       console.log("Insufficient quantity available.");
//     }
//   }
// }


// const product = new Product("Shirt", 20, 5);
// console.log(product.totalPrice());
// product.add(3);
// console.log(product.quantity);
// product.sell(2);
// console.log(product.quantity);


// 3
// class TodoList {
//   private todos: string[];

//   constructor() {
//     this.todos = [];
//   }

//   public addTask(task: string): void {
//     this.todos.push(task);
//   }

//   public deleteTask(id: number): void {
//     if (id >= 0 && id < this.todos.length) {
//       this.todos.splice(id, 1);
//     }
//   }

//   public editTask(id: number, task: string): void {
//     if (id >= 0 && id < this.todos.length) {
//       this.todos[id] = task;
//     }
//   }

//   public getTask(id: number): string {
//     if (id >= 0 && id < this.todos.length) {
//       return this.todos[id];
//     }
//     return "";
//   }

//   public getTasks(): string[] {
//     return this.todos;
//   }
// }

// const todoList = new TodoList();
// todoList.addTask("Task 1");
// todoList.addTask("Task 2");
// console.log(todoList.getTasks());
// todoList.editTask(0, "Updated Task 1");
// console.log(todoList.getTask(0));
// todoList.deleteTask(1);
// console.log(todoList.getTasks());


// 4
// class Employee {
//   constructor(public firstName: string, public lastName: string, public role: string) {}

//   public introduce(): string {
//     return `Hello, my name is ${this.firstName} ${this.lastName} and I'm a ${this.role}.`;
//   }
// }


// const employee = new Employee("John", "Doe", "Manager");
// console.log(employee.introduce());


/////////////////



// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   street: string;
//   city: string;
//   zipCode: string;
// }

// interface Email {
//   email: string;
// }

// interface Phone {
//   phoneNumber: string;
// }

// type ContactInfo = Person & Address & Email & Phone;


// const contact: ContactInfo = {
//   name: "John Doe",
//   age: 30,
//   street: "123 Main St",
//   city: "New York",
//   zipCode: "12345",
//   email: "johndoe@example.com",
//   phoneNumber: "555-1234"
// };

// console.log(contact);


///////////////////