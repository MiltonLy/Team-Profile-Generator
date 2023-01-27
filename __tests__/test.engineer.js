const Engineer = require("../roles/Engineer");

test('create the engineer obj', () => {
    const engineer = new Engineer('Willy', '2', 'willy@gmail.com', 'github.com/willy')

    expect(engineer.name).toBe('Willy')
    expect(engineer.id).toBe('2')
    expect(engineer.email).toBe('willy@gmail.com')
    expect(engineer.github).toBe('github.com/willy')
})