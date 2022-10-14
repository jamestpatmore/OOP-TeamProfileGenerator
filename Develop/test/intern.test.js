const Intern = require('../lib/intern');

describe("Intern", () => {
    const psuedoIntern = {
        name: "Lily",
        id: 444,
        email: "lily-ux@gmail.com",
        school: "Univeristy of Arizona",
        role: "Intern",
    };
    describe("constructor tests", () => {
        test("constructing a new instance of an intern class", () => {
            const intern = new Engineer(psuedoIntern);
            expect(intern).toBeInstanceof(Intern);
        });
        test("constructing new instance of an intern class with name, id, email, school, and role", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern).toEqual({
                name: "Lily",
                id: 444,
                email: "lily-ux@gmail.com",
                school: "Univeristy of Arizona",
                role: "Intern",
            });
        });
    });
    describe("method tests", () => {
        test("expected to return the id when the getId method is called", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern.getId()).toEqual(444);
        });
        test("expected to return the name when the getName method is called", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern.getName()).toEqual("Lily");
        });
        test("expected to return the email when the getEmail method is called", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern.getEmail()).toEqual("lily-ux@gmail.com");
        });
        test("expected to return the email when the getSchool method is called", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern.getSchool()).toEqual("University of Arizona");
        });
        test("expected to return the email when the getRole method is called", () => {
            const intern = new Employee(psuedoIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});