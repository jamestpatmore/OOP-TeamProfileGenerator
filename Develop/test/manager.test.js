const Manager = require("../lib/manager");

describe("Manager", () => {
    const psuedoManager = {
        name: "Violet",
        id: 555,
        email: "violetCFO@gmail.com",
        officeNumber: 111,
    };
    describe("constructor tests", () => {
        test("constructing a new instance of an manager class", () => {
            const manager = new Employee(psuedoManager);
            expect(manager).toBeInstanceof(Manager);
        });
        test("constructing new instance of an managerclass with name, id, and email", () => {
            const manager = new Employee(psuedoManager);
            expect(manager).toEqual({
                name: "Violet",
                id: 555,
                email: "violetCFO@gmail.com",
                officeNumber: 111,
            });
        });
    });
    describe("method tests", () => {
        test("expected to return the id when the getId method is called", () => {
            const manager = new Employee(psuedoManager);
            expect(manager.getId()).toEqual(555);
        });
        test("expected to return the name when the getName method is called", () => {
            const manager = new Employee(psuedoManager);
            expect(manager.getName()).toEqual("Violet");
        });
        test("expected to return the email when the getEmail method is called", () => {
            const manager = new Employee(psuedoManager);
            expect(manager.getEmail()).toEqual("violetCFO@gmail.com");
        });
        test("expected to return the office number when the getOfficeNumber method is called", () => {
            const manager = new Employee(psuedoManager);
            expect(manager.getOfficeNumber()).toEqual(111);
        });
    });
});