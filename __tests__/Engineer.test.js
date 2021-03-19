const Engineer = require("../lib/Engineer");

test('can create new engineer with name', () => {
    var Erza = new Engineer("Erza Scarlet");
    expect(Erza.getName()).toBe("Erza Scarlet");
    expect(Erza.getId()).toBe(undefined);
    expect(Erza.getEmail()).toBe(undefined);
    expect(Erza.getGitHub()).toBe(undefined);
    expect(Erza.getRole()).toBe("Engineer");
});

test('can create new engineer with name', () => {
    var Erza = new Engineer("Erza Scarlet", "03");
    expect(Erza.getName()).toBe("Erza Scarlet");
    expect(Erza.getId()).toBe("03");
    expect(Erza.getEmail()).toBe(undefined);
    expect(Erza.getGitHub()).toBe(undefined);
    expect(Erza.getRole()).toBe("Engineer");
});

test('can create new engineer with name', () => {
    var Erza = new Engineer("Erza Scarlet", "03", "queentitania@gmail.com");
    expect(Erza.getName()).toBe("Erza Scarlet");
    expect(Erza.getId()).toBe("03");
    expect(Erza.getEmail()).toBe("queentitania@gmail.com");
    expect(Erza.getGitHub()).toBe(undefined);
    expect(Erza.getRole()).toBe("Engineer");
});

test('can create new engineer with name', () => {
    var Erza = new Engineer("Erza Scarlet", "03", "queentitania@gmail.com", "fairyQueen");
    expect(Erza.getName()).toBe("Erza Scarlet");
    expect(Erza.getId()).toBe("03");
    expect(Erza.getEmail()).toBe("queentitania@gmail.com");
    expect(Erza.getGitHub()).toBe("fairyQueen");
    expect(Erza.getRole()).toBe("Engineer");
});
