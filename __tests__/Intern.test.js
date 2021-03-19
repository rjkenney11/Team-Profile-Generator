const Intern = require("../lib/Intern");

test('can create new intern with name', () => {
    var Juvia = new Intern("Juvia");
    expect(Juvia.getName()).toBe("Juvia");
    expect(Juvia.getId()).toBe(undefined);
    expect(Juvia.getEmail()).toBe(undefined);
    expect(Juvia.getSchool()).toBe(undefined);
    expect(Juvia.getRole()).toBe("Intern");
});

test('can create new intern with name', () => {
    var Juvia = new Intern("Juvia", "13");
    expect(Juvia.getName()).toBe("Juvia");
    expect(Juvia.getId()).toBe("13");
    expect(Juvia.getEmail()).toBe(undefined);
    expect(Juvia.getSchool()).toBe(undefined);
    expect(Juvia.getRole()).toBe("Intern");
});

test('can create new intern with name', () => {
    var Juvia = new Intern("Juvia", "13", "ilovegray@gmail.com");
    expect(Juvia.getName()).toBe("Juvia");
    expect(Juvia.getId()).toBe("13");
    expect(Juvia.getEmail()).toBe("ilovegray@gmail.com");
    expect(Juvia.getSchool()).toBe(undefined);
    expect(Juvia.getRole()).toBe("Intern");
});

test('can create new intern with name', () => {
    var Juvia = new Intern("Juvia", "13", "ilovegray@gmail.com", "Fairy Tail Guild");
    expect(Juvia.getName()).toBe("Juvia");
    expect(Juvia.getId()).toBe("13");
    expect(Juvia.getEmail()).toBe("ilovegray@gmail.com");
    expect(Juvia.getSchool()).toBe("Fairy Tail Guild");
    expect(Juvia.getRole()).toBe("Intern");
});
