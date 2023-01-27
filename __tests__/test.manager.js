const Manager = require("../roles/Manager")

test('create the manager obj', () => {
    const manager = new Manager('White', '4', 'white@gmail.com', '204')

    expect(manager.name).toBe('White');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('white@gmail.com');
    expect(manager.officeNumber).toBe('204');
})