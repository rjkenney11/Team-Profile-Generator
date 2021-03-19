const Employee = require("../lib/Employee");

test('can create new employee with name', () => {
    var candy = new Employee("Candy", "1", "candy@gmail.com" );
    expect(candy.getName()).toBe("Candy");
    expect(candy.getId()).toBe("1");
    expect(candy.getEmail()).toBe("candy@gmail.com");
    expect(candy.getRole()).toBe("Employee");
});

