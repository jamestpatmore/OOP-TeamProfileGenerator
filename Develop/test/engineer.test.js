const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    const psuedoEngineer = {
        name: "Billy",
        id: 333,
        email: "billycodes@gmail.com",
        github: "www.github.com/billy_codes",
    };
    describe("constructor tests", () => {
        test("constructing a new instance of an engineer class", () => {
            const engineer = new Engineer(psuedoEngineer);
            expect(engineer).toBeInstanceof(Engineer);
        });
        test("constructing new instance of an engineer class with name, id, email, and github", () => {
            const engineer = new Employee(psuedoEngineer);
            expect(engineer).toEqual({
                name: "Billy",
                id: 333,
                email: "billycodes@gmail.com",
                github: "www.github.com/billy_codes",
            });
        });
    });
    describe("method tests", () => {
        test("expected to return the id when the getId method is called", () => {
            const engineer = new Employee(psuedoEngineer);
            expect(engineer.getId()).toEqual(333);
        });
        test("expected to return the name when the getName method is called", () => {
            const engineer = new Employee(psuedoEngineer);
            expect(engineer.getName()).toEqual("Billy");
        });
        test("expected to return the email when the getEmail method is called", () => {
            const engineer = new Employee(psuedoEngineer);
            expect(engineer.getEmail()).toEqual("billycodes@gmail.com");
        });
        test("expected to return the email when the getGithub method is called", () => {
            const engineer = new Employee(psuedoEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/billy_codes");
        });
    });
});