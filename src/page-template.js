const generateTeam = team => {
    console.log(team)

    /*
    let cards = [];
    // let team = [{Manager}, {Engineer}, {Intern}, {Engineer}, {Intern} ]

    team.forEach( member => {
        console.log(member.name)
        let card;
        if(member.getRole() === "Manager") {
            card = generateManager(member);
        } else if(member.getRole() === "Engineer") {
            card = generateEngineer(member);
        } else if(member.getRole() === "Intern") {
            card = generateIntern(member);
        } else {
            console.log("Error wrong OBJECT TYPE");
        }
        cards.push(card);
    });

    console.log(cards);
    */

    const generateManager = Manager => {
        return ` 
        <div class="card" style="width: 18rem;" >
            <div class="card-header" id="manager">
            <h3>${Manager.name}</h3>
            <i class="fas fa-coffee"><h5> "Manager" </h5></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${Manager.id}</li>
                <li class="list-group-item">Email:${Manager.email}</li>
                <li class="list-group-item">Office Number:${Manager.officeNum}</li>
             </ul>
        </div>
        `
    }
   // return generateManager(team[0]);

    const generateEngineer = Engineer => {
        return `
        <div class="card" style="width: 18rem;" >
        <div class="card-header" id="engineer">
        <h3>${Engineer.name}</h3>
        <i class="fas fa-coffee"><h5> "Engineer" </h5></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Engineer.id}</li>
                <li class="list-group-item">Email:${Engineer.email}</li>
                <li class="list-group-item">Git Hub:${Engineer.GitHub}</li>
            </ul>
        </div>
    </div>`
    }

   // return generateEngineer(team[0]);


    const generateIntern = Intern => {
        return `
        <div class="card" style="width: 18rem;" >
        <div class="card-header" id="intern">
        <h3>${Intern.name}</h3>
        <i class="fas fa-coffee"><h5> "Intern" </h5></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email:${Intern.email}</li>
                <li class="list-group-item">Current University:${Intern.school}</li>
            </ul>
        </div>
    </div>`
    }
    
  //  return generateIntern(team[0]);

  // ---------------- //
    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    
    return html.join("");

}

const layout = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="../src/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">         
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        ${generateTeam(team)}
    </body>
    </html>
    `
}


module.exports = layout;