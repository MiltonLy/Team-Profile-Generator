const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, job, id, email, officeNumber) {
        super(name, job, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return `${this.officeNumber}`
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;