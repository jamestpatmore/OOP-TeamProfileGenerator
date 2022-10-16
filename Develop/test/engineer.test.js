const Engineer = require('../lib/engineer');

test("Can create a github.", () => {
    const testGithub = "jamestpatmore";
    const employeeInstance = new Engineer("James", 2, "jamesthomaspatmore7@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "jamestpatmore";
    const employeeInstance = new Engineer("James", 2, "jamesthomaspatmore7@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("James", 2, "jamesthomaspatmore7@gmail.com", "jamestpatmore");
    expect(employeeInstance.getRole()).toBe(returnValue);
});