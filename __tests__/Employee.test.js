const Employee = require("../lib/Employee");

test('can create new employee with name', () => {
    var candy = new Employee("Candy");
    expect(candy).toBe("Candy");
});