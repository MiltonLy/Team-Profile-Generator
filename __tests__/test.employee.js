const Employee = require("../assets/js/roles/Employee")

test('create the employee obj', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@gmail.com');
})
