const Employee = require('../lib/employee');

describe("Employee", () => {
    const psuedoEmployee = {
        name: "James",
        id: 777,
        email: "typeXguru@gmail.com",
    };
    describe("constructor tests", () => {
        test("constructing a new instance of an employee class", () => {
            const employee = new Employee(psuedoEmployee);
            expect(employee).toBeInstanceof(Employee);
        });
        test("constructing new instance of an employee class with name, id, and email", () => {
            const employee = new Employee(psuedoEmployee);
            expect(employee).toEqual({
                name: "James",
                id: 777,
                email: "typeXguru@gmail.com",
            });
        });
    });
    describe("method tests", () => {
        test("expected to return the id when the getId method is called", () => {
            const employee = new Employee(psuedoEmployee);
            expect(employee.getId()).toEqual(777);
        });
        test("expected to return the name when the getName method is called", () => {
            const employee = new Employee(psuedoEmployee);
            expect(employee.getName()).toEqual("James");
        });
        test("expected to return the email when the getEmail method is called", () => {
            const employee = new Employee(psuedoEmployee);
            expect(employee.getEmail()).toEqual("typeXguru@gmail.com");
        });
    });
});