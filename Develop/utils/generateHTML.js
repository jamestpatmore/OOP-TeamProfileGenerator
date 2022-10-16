
const generateTeam = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
      <div class="card" style="width: 24rem;">
        <div class="card-header">
            ${manager.name} </br>
            Manager
            <i class="fa-solid fa-people-roof"></i>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${manager.id}</li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
      </div>
        `;
        html.push(managerHtml);
    }
    const genrateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 24rem;">
        <div class="card-header">
            ${engineer.name} </br>
            Engineer
            <i class="fa-solid fa-laptop-code"></i>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.id}</li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item"> Github: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</li>
            </ul>
        </div>
      </div>
        
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 24rem;">
        <div class="card-header">
            ${intern.name} </br>
            Intern
            <i class="fa-solid fa-school"></i>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${intern.id}</li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>
      </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            genrateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team Profile</title>
</head>
<body>
    <nav class="navbar bg-black">
        <div class="navbar-brand">
            <div class="navbar-item"> 
              <img src="../dist/images/logo.jpeg" class="logo">
                <div class="nav-text">
                    HYBRIS TECH
                </div>
            </div>
        </div>
    </nav>

    <h1 class="title">Our Team</h1>
    
  <div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
    </div>
  </div> 
    
    
    </body>
    </html>
  
    `;
};

