const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, job, id, email, github) {
        super(name, job, id, email)

        this.github = github;
    }

    getGithub() {
        return `${this.github}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;