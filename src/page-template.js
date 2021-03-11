const generateTeam = team => {
    console.log(team)

    /*team.forEach(function(member) {
        console.log(member.name)
    })
    */

    let cards = []; 
    
    const generateManager = manager => {
        return ` 
            <div class="card">
                <div class="card-header">
                    ${manager.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    }

    return generateManager(team[0]);

}

const layout = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        ${generateTeam(team)}
    </body>
    </html>
    `
} 


module.exports = layout;