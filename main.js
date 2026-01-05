function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
}

Phone.prototype.details = function () {
    console.log(`Phone: ${this.brand} ${this.model}`);
};

// Example run
const phone = new Phone("Samsung", "S22");
phone.details(); // Phone: Samsung S22






function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

// Example run
const rect = new Rectangle(5, 4);
console.log(rect.area()); // 20







function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
};

BankAccount.prototype.checkBalance = function () {
    console.log(`Balance: ${this.balance}`);
};

// Example run
const account = new BankAccount("Alice", 1000);

account.deposit(500);      // balance = 1500
account.withdraw(200);     // balance = 1300
account.checkBalance();    // Balance: 1300







function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};

function Dog(name) {
    Animal.call(this, name); // hérite des propriétés
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} barks`);
};

// Example run
const dog = new Dog("Rocky");
dog.speak(); // Rocky makes a sound
dog.bark();  // Rocky barks










function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type}`);
};

function Car(brand) {
    Vehicle.call(this, "car");
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.info = function () {
    console.log(`This is a ${this.brand} ${this.type}`);
};

// Example run
const car = new Car("BMW");
car.describe(); // This is a car
car.info();     // This is a BMW car








function Shape() { }

Shape.prototype.area = function () {
    return 0;
};
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
};
function Square(side) {
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function () {
    return this.side * this.side;
};
// Example run
const circle = new Circle(3);
console.log(circle.area()); // ~28.27

const square = new Square(4);
console.log(square.area()); // 16






class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    info() {
        console.log(`the ${this.title} by ${this.author}`);
    }
}
const book = new Book("1984", "George Orwell");
book.info();

class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`hello, i'm ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    study() {
        console.log(`${this.name} is studing at ${this.school}`)
    }
}

const student1 = new Student('allice', 'oxford')
student1.greet()
student1.study()

class Employee {
    #salary
    constructor(salary) {
        this.#salary = salary
    }
    getSalary() {
        console.log(this.#salary)
    }
    works() {
        console.log('employee is working')
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary)
    }
    works() {
        console.log('Manager is managing')
    }
}

const employee = new Employee(4000)
employee.getSalary()
employee.works()

const manager = new Manager(5000)
manager.getSalary()
manager.works()