// let car = {
// //     make: "Toyota",
// //     model:"Camry",
// //     year: 2020,
// //     start: function (){
// //         return `${this.make} car got started in ${this.year}`;
// //     },
// // };
// // // console.log(car.start ())

// // function Person (name,age){
// //     this.name = name
// //     this.age = age
// // }
// // let john = new Person("john",20)
// // // console.log(john.name);

// // function Animal(type){
// //     this.type = type
// // }

// // Animal.prototype.speak = function(){
// //     return`${this.type} makes a sound`
// // }

// // Array.prototype.vaibhav = function (){
// //     return`Custom method ${this}`;
// // };

// // let myArray = [1,2,3];
// // // console.log(myArray.vaibhav());
// // let myNewArray = [1,2,3,4,5,6];
// // // console.log(myNewArray.vaibhav())



// class Vehicle{
//        constructor(make,model){
//         this.make = make
//         this.model = model
//        }
//          start(){
//             return`${this.model} is a car from ${this.model}`;
//          }
// }

// class Car extends Vehicle {
//     drive(){
//         return`${this.make}:This is an inheritance example`;
//     }
// }

// let myCar = new Car ("Toyata","Corolla");
// // console.log(myCar.start());
// // console.log(myCar.drive());



// Encapsulation

// class BankAccount {
//     #balance = 0;
//     deposit(amount){
//         this.#balance += amount
//         return this.#balance;
//     }
//     getBalance(){
//         return `$ ${this.#balance}`;
//     }
// }
// let account = new BankAccount()
// console.log(account.getBalance(  ));


// // Abstraction

// class CoffeMachine {
//     start(){
//         // call  database
//         // filter value
//         return `Starting the machine...`;
//     }
//     brewCoffee(){
//         // complex calculate
//         return `Brewing coffee`;
//     }
//     pressStartButton(){
//        let msgone = this.start()
//         let msgtwo= this.brewCoffee()
//         return`${msgone} + ${msgtwo}`
//     }
// }

// let myMachine  = new CoffeMachine()
// // console.log(myMachine.start());
// // console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton())


// // POlymorphism
// class Bird{
//     fly(){
//         return `Flying...`
//     }
// }
// class Penguin extends Bird {
//     fly(){
//         return `Penguins can't fly`
//     }
// }
// let bird = new Bird()
// let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

// // statics method  

// class calculator{
//     statics add(a,b){
//         return a+b
//     }
// }

// let minicalc = new calculator
// console.log(minicalc.add(2,3));
// console.log(calculator.add(2,3));

// getter & setter

class Employee{
    #salary;
    constructor(name,salary){
        if(salary < 0){
            throw new Error("Salary cannot be");
        }
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `not allowed to see salary`
    }

    set salary(value){
        if(value < 0){
            console.error("invalid salary")
        }else{
            this.salary = value;
        }
    }
}
let emp = new Employee("Alice",-5000);
console.log(emp._salary)
emp.salary = 6000;
