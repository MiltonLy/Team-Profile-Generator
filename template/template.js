const managerCard = (data) => {
    return `<section>
    <div class="container">
        <div class="manager">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-header bg-primary text-white">
                    <h4 class="card-title">${data.name}</h4>
                    <h5 class="card-subtitle mb-2">${data.job}</h5>
                    </div>
                    <p></p>
                    <h6 class="card-text">ID: ${data.id}</h6>
                    <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                    <h6 class="card-text">Office Number: ${data.officeNumber}</h6>
                </div>
            </div>
        </div>
    </div>
</section>`
}

const engineerCard = (data) => {
    return `<section>
    <div class="container">
        <div class="engineer">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-header bg-primary text-white">
                    <h4 class="card-title">${data.name}</h4>
                    <h5 class="card-subtitle mb-2">${data.job}</h5>
                    </div>
                    <p></p>
                    <h6 class="card-text">ID: ${data.id}</h6>
                    <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                    <h6 class="card-text">GitHub: <a href="https://github.com/${data.github}">https://github.com/${data.github}</a></h6>
                </div>
            </div>
        </div>
    </div>
</section>`
}

const internCard = (data) => {
    return `<section>
    <div class="container">
        <div class="intern">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-header bg-primary text-white">
                    <h4 class="card-title">${data.name}</h4>
                    <h5 class="card-subtitle mb-2">${data.job}</h5>
                    </div>
                    <p></p>
                    <h6 class="card-text">ID: ${data.id}</h6>
                    <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                    <h6 class="card-text">School: ${data.school}</h6>
                </div>
            </div>
        </div>
    </div>
</section>`
}

const cards = data => {
    var createCard = '';
    for (i = 0; i < data.length; i++){
        if (data[i].getRole() === 'Manager'){
            createCard += managerCard(data[i])
        } else if (data[i].getRole() === 'Engineer'){
            createCard += engineerCard(data[i])
        } else if (data[i].getRole() === 'Intern'){
            createCard += internCard(data[i])
        }
    }
    return createCard;
}

const template = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="flex-wrap">
           ${cards(data)}
    </div>
    </main> 
    </body>
    </html>`
}

module.exports = template;