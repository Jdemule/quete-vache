const userInformation = require('./userinformation');
console.log(`Hi, my name is ${userInformation.name} and I'm ${userInformation.campus} campus`);


const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));