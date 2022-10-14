const generateTeam = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
      <div class="card" style="width: 24rem;">
        <div class="card-header">
            ${manager.name} </br>
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
            <i class="fa-brands fa-wpbeginner"></i>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.id}</li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${engineer.email}">${manager.email}</a></span></li>
                <li class="list-group-item"> Github: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</li>
            </ul>
        </div>
      </div>
        
        `;
        html.push(engineerHtml);
    }
}

