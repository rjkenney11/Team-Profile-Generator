const Employee = require("./Employee");


class Manager extends Employee{

    // Define our class using a constructor function
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

  
    getRole() {
        return "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }
}


module.exports = Manager;

