const Manager = require("../lib/Manager");

test('can create new manager with name', () => {
    var Makarov = new Manager("Makarov");
    expect(Makarov.getName()).toBe("Makarov");
    expect(Makarov.getId()).toBe(undefined);
    expect(Makarov.getEmail()).toBe(undefined);
    expect(Makarov.getOfficeNum()).toBe(undefined);
    expect(Makarov.getRole()).toBe("Manager");
});

test('can create new Manager with name', () => {
    var Makarov = new Manager("Makarov", "01");
    expect(Makarov.getName()).toBe("Makarov");
    expect(Makarov.getId()).toBe("01");
    expect(Makarov.getEmail()).toBe(undefined);
    expect(Makarov.getOfficeNum()).toBe(undefined);
    expect(Makarov.getRole()).toBe("Manager");
});

test('can create new Manager with name', () => {
    var Makarov = new Manager("Makarov", "01", "masterdreyar@gmail.com");
    expect(Makarov.getName()).toBe("Makarov");
    expect(Makarov.getId()).toBe("01");
    expect(Makarov.getEmail()).toBe("masterdreyar@gmail.com");
    expect(Makarov.getOfficeNum()).toBe(undefined);
    expect(Makarov.getRole()).toBe("Manager");
});

test('can create new Manager with name', () => {
    var Makarov = new Manager("Makarov", "01", "masterdreyar@gmail.com", "07");
    expect(Makarov.getName()).toBe("Makarov");
    expect(Makarov.getId()).toBe("01");
    expect(Makarov.getEmail()).toBe("masterdreyar@gmail.com");
    expect(Makarov.getOfficeNum()).toBe("07");
    expect(Makarov.getRole()).toBe("Manager");
});
