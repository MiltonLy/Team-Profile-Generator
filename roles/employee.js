class Employee {
    constructor(name, job, id, email) {
        this.name = name;
        this.job = job;
        this.id = id;
        this.email = email;
    }

    getName(){
        return `${this.name}`
    }

    getId(){
        return `${this.id}`
    }

    getEmail(){
        return `${this.email}`
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;