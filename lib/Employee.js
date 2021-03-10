

class Employee {

    // Define our class using a constructor function
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

//let bob = new Employee("Bob");

//bob.name   // --> reuturn "Bob"
//bob.getName()

module.exports = Employee;

