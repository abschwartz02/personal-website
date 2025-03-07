export async function generateTopBar(selectedButton, selectedProject) {
  let homeBarHTML = `
  
      <div class="topBar">
            
            <div class="page-select-container js-page-select-container">
            
            <button class="page-select-button js-page-select-button js-home-button`;

        if (selectedButton === "Home") {
          homeBarHTML += ` selected-page-button js-selected-page-button`;
        }

        homeBarHTML += `">Home</button>
          <button class="page-select-button js-page-select-button js-projects-button
        `;

        if (selectedButton === "Projects") {
          homeBarHTML += ` selected-page-button js-selected-page-button`;
        }

        homeBarHTML += `">Projects</button>
          <button class="page-select-button js-page-select-button js-fun-facts-button
        `;

        if (selectedButton === "FunFacts") {
          homeBarHTML += ` selected-page-button js-selected-page-button`;
        }

        homeBarHTML += `">Fun Facts</button>
            
            </div>

        <div class="project-select-container js-project-select-container">
          <div class="project-select-buttons">
            <button class="project-select-button js-project-select-button js-web-config-button`;
            
            if (selectedProject === 'Hitachi') {
              homeBarHTML += ` selected-project-button js-selected-project-button`;
            }

            homeBarHTML += `">Hitachi Energy Web Configurator</button>
            <button class="project-select-button js-project-select-button js-data-analysis-button`
            
            if (selectedProject === 'Data') {
              homeBarHTML += ` selected-project-button js-selected-project-button`;
            }


            homeBarHTML +=`">Stock Data Analysis</button>
            <button class="project-select-button js-project-select-button js-new-language-button`
            
            if (selectedProject === 'NewPL') {
              homeBarHTML += ` selected-project-button js-selected-project-button`;
            }

            homeBarHTML += `">New Coding Language Interpreter</button>
            <button class="project-select-button js-project-select-button js-coffee-button`
            
            if (selectedProject === 'Coffee') {
              homeBarHTML += ` selected-project-button js-selected-project-button`;
            }
            homeBarHTML += `">CoffeeMaker Web Application</button>

          </div>
        </div>
      </div>

      `;


  
  return homeBarHTML;
}

export async function configureTopBar(dom) {
  dom.querySelector('.js-fun-facts-button')
    .addEventListener('click', () => {
      window.location.href = "/funfacts.html";
    });

    dom.querySelector('.js-home-button')
    .addEventListener('click', () => {
      window.location.href = "/home.html";
    });

    const projectsButton = dom.querySelector('.js-projects-button');
    projectsButton.addEventListener('click', () => {
      window.location.href = "/projects.html";
    });
    const dropDownElement = dom.querySelector('.js-project-select-container');

    projectsButton.addEventListener('mouseover', () => {
      
      dropDownElement.style.display="block";
    });
    projectsButton.addEventListener('mouseleave', () => {
       dropDownElement.style.display="none";
    });

    dropDownElement.addEventListener('mouseover', () => {
      dropDownElement.style.display="block";
    });

    dropDownElement.addEventListener('mouseleave', () => {
      dropDownElement.style.display="none";
    });



  //add an event listener for scorlling as well
  dom.addEventListener("scroll", function () {
    const topBar = dom.querySelector('.js-page-select-container')
    const topBarButtons = dom.querySelectorAll('.js-page-select-button');
    const pageButton = dom.querySelector('.js-selected-page-button');
    
    const projectButtons = dom.querySelectorAll('.js-project-select-button');
    const selectedProject = dom.querySelector('.js-selected-project-button');

    if (window.scrollY > 0) {
      topBar.classList.add("page-select-scrolled");
      topBarButtons.forEach(button => {
        button.classList.add("page-select-button-scrolled");
      });
      pageButton.classList.add("selected-page-button-scrolled");
      
      if (selectedProject) {
        selectedProject.classList.add("selected-project-button-scrolled");
      }

      projectButtons.forEach(button => {
        button.classList.add("project-select-button-scrolled");
      });

      
    }
    else {
      topBar.classList.remove("page-select-scrolled");
      topBarButtons.forEach(button => {
        button.classList.remove("page-select-button-scrolled");
      });
      pageButton.classList.remove("selected-page-button-scrolled");

      if (selectedProject) {
        selectedProject.classList.remove("selected-project-button-scrolled");
      }

      projectButtons.forEach(button => {
        button.classList.remove("project-select-button-scrolled");
      });
    }
  });

    dom.querySelector('.js-web-config-button')
    .addEventListener('click', () => {
      window.location.href = "/projects/web-config-project.html";
    });

    dom.querySelector('.js-data-analysis-button')
    .addEventListener('click', () => {
      window.location.href = "/projects/data-analysis-project.html";
    });

    dom.querySelector('.js-new-language-button')
    .addEventListener('click', () => {
      window.location.href = "/projects/new-language-project.html";
    });
    dom.querySelector('.js-coffee-button')
    .addEventListener('click', () => {
      window.location.href = "/projects/coffeemaker-web-app.html";
    });

}

export async function generateFooter() {
  return `
    <div class="footer-container">
        <div class="footer-blocks">
          <div class="footer-block">
            <div class="footer-block-header">
              Contact
              
            </div>
            <div class="footer-block-links">

              <p>Email: abenschwartz02@gmail.com</p>
              <p>Phone: (919) 651 3608</p>
              
            </div>
          </div>
          
          <div class="footer-block">
            <div class="footer-block-header">
              Socials
              
            </div>
            <div class="footer-block-images">
              <a href ="https://www.linkedin.com/in/andschwartz/" target="_blank">
                <img class="footer-image" src="/images/linkedin.png" alt="LinkedIn "title="LinkedIn">
              </a>
              <a href ="https://github.com/abschwartz02" target="_blank">
                <img class="footer-image" src="/images/github.png" alt="Github "title="Github">
              </a>
              <a href ="https://www.instagram.com/a22_schwartz" target="_blank">
                <img class="footer-image" src="/images/instagram.png" alt="Instagram" title="Instagram">
              </a>
              
            </div>
          </div>
        </div>
      </div>
  `;
}
