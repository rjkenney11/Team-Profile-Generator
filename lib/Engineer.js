const Employee = require("./Employee");


class Engineer extends Employee{

    // Define our class using a constructor function
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
    }

  
    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.GitHub;
    }
}


module.exports = Engineer;

