export const homeData = [
  {
    image: 'images/question-mark.png',
    header: 'Who is Andrew Schwartz?',
    text: `The handsome gentleman in the picture above is none other than yours truly. I love to code, and I built this website from scratch to log my career journey as well as show off some projects and my unique personality. `
  },
  {
    image: 'images/ncsu-wolf.png',
    header: 'Education',
    text: 'Go pack! Earning my CS degree as a member of the wolfpack nation was a truly unforgettable experience. I embraced a studious lifestyle, graduating with a 3.97 GPA, and taking some really fun courses. Check out the projects page to view some of the work from my most memorable courses.'
  },
  {
    image: 'images/career.png',
    header: 'My Career',
    text: 'As a recent college graduate, I am eagerly seeking to put my degree to work! Working at a steakhouse for 6 years through highschool and college was an amazing experience and taught me the value of employee loyalty, but my real passion lies with building meaningful software solutions, and I cannot wait to see where the tech industry will take me!' 
  }
]

export function generateHomePage() {
  let homePageHTML = '';
  homeData.forEach((block, index) => {
    if (index % 2 == 0) {
      homePageHTML += `
      <div class="home-page-section-even">
        <img class="section-image-even" src="${block.image}">
        
        <div class="section-content-even">
          <p class="section-header-even">${block.header}</p>
          <p class="section-text-even">${block.text}
          </p>
        </div>
      </div>
    `;
    
    }
    
    else {
      homePageHTML += `
      <div class="home-page-section-odd">
        <div class="section-content-odd">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text}
          </p>
        </div>

        <img class="section-image-odd" src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-home-blocks')
    .innerHTML = homePageHTML;
  
  //add an event listener for scorlling as well
  document.addEventListener("scroll", function () {
    const topBar = document.querySelector('.js-page-select-container')
    const topBarButtons = document.querySelectorAll('.js-page-select-button');
    const pageButton = document.querySelector('.js-selected-page-button');
    

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