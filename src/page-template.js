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
        <div class="card" style="width: 18rem;">
        <div class="employeeTitle text-center" id="manager">
            <h2>${Manager.name}</h2>
            <h5> "Manager" </h5>
            <i class="fas fa-briefcase"></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:  ${Manager.id}</li>
                <li class="list-group-item">Email:  ${Manager.email}</li>
                <li class="list-group-item">Office Number:  ${Manager.officeNum}</li>
             </ul>
        </div>
        </div>
        `
    }
    // return generateManager(team[0]);

    const generateEngineer = Engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="employeeTitle text-center" id="engineer">
        <h2>${Engineer.name}</h2>
        <h5> "Engineer" </h5>
        <i class="fas fa-laptop-code"></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:  ${Engineer.id}</li>
                <li class="list-group-item">Email:  ${Engineer.email}</li>
                <li class="list-group-item">GitHub:  ${Engineer.GitHub}</li>
            </ul>
        </div>
    </div>`
    }

    // return generateEngineer(team[0]);


    const generateIntern = Intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="employeeTitle text-center" id="intern">
        <h2>${Intern.name}</h2>
        <h5> "Intern" </h5>
        <i class="far fa-clipboard"></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email:  ${Intern.email}</li>
                <li class="list-group-item">Current University:  ${Intern.school}</li>
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../src/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d3bce829f3.js" crossorigin="anonymous"></script>
    </head>
    <h1> Our Team: </h1>
    <body>
    <div class="row">
        ${generateTeam(team)}
    </div>
    </body>
    </html>
    `
}


module.exports = layout;