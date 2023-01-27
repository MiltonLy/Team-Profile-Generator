const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, job, id, email, school){
        super(name, job, id, email)
        this.school = school
    }
    
    getSchool(){
        return `${this.school}`
    }

    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;