export async function generateTopBar(selectedButton) {
  let homeBarHTML = `<div class="page-select-container js-page-select-container">
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
      </div>`


  
  return homeBarHTML;
}

export async function configureTopBar(dom) {
  dom.querySelector('.js-fun-facts-button')
    .addEventListener('click', () => {
      window.location.href = "funfacts.html";
    });

    dom.querySelector('.js-home-button')
    .addEventListener('click', () => {
      window.location.href = "home.html";
    });

    dom.querySelector('.js-projects-button')
    .addEventListener('click', () => {
      window.location.href = "projects.html";
    });


  //add an event listener for scorlling as well
  dom.addEventListener("scroll", function () {
    const topBar = dom.querySelector('.js-page-select-container')
    const topBarButtons = dom.querySelectorAll('.js-page-select-button');
    const pageButton = dom.querySelector('.js-selected-page-button');
    

    if (window.scrollY > 0) {
      topBar.classList.add("page-select-scrolled");
      topBarButtons.forEach(button => {
        button.classList.add("page-select-button-scrolled");
      });
      pageButton.classList.add("selected-page-button-scrolled");
  
    }
    else {
      topBar.classList.remove("page-select-scrolled");
      topBarButtons.forEach(button => {
        button.classList.remove("page-select-button-scrolled");
      });
      pageButton.classList.remove("selected-page-button-scrolled");
    }
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
                <img class="footer-image" src="images/linkedin.png" alt="LinkedIn "title="LinkedIn">
              </a>
              <a href ="https://github.com/abschwartz02" target="_blank">
                <img class="footer-image" src="images/github.png" alt="Github "title="Github">
              </a>
              <a href ="https://www.instagram.com/a22_schwartz" target="_blank">
                <img class="footer-image" src="images/instagram.png" alt="Instagram" title="Instagram">
              </a>
              
            </div>
          </div>
        </div>
      </div>
  `;
}
