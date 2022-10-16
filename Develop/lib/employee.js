class Employee{
    // constructor function creating the objects/elements of the employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // methods retrieving the user inputted information for the values 
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee; 