const Employee = require("./Employee");


class Intern extends Employee{

    // Define our class using a constructor function
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

  
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}


module.exports = Intern;

