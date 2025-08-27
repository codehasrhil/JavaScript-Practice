// this = referench to the object where this is used 


const person1 = {
    name:"harshil",
    favFood:"cake",
    sayHello:function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log((`${this.name} is eating ${this.favFood}`))}
}

person1.sayHello()
person1.eat()

console.log(person1)