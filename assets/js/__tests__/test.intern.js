const Intern = require("../roles/Intern")

test('create the intern obj', () => {
    const intern = new Intern('Sally', '3', 'sally@gmail.com', 'Berkeley')

    expect(intern.name).toBe('Sally')
    expect(intern.id).toBe('3')
    expect(intern.email).toBe('sally@gmail.com')
    expect(intern.school).toBe('Berkeley')
})