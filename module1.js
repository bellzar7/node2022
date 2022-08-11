function createUser (name, age) {
    return{
        name,
        age,
        sayHello: ()=> {
            console.log(`Hello my name is ${name} i am ${age} years old`);
        }
    }
}

module.exports = {
    createUser
}