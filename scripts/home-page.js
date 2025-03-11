import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const homeData = [
  {
    image: 'images/question-mark.png',
    header: 'Who is Andrew Schwartz?',
    text: `The gentleman in the picture above is none other than yours truly. I love to code, and I built this website from scratch to log my career journey as well as show off some projects and my unique personality. `
  },
  {
    image: 'images/ncsu-wolf.png',
    header: 'Education',
    linkToProjects: true,
    text1: 'Go pack! Earning my CS degree as a member of the wolfpack nation was a truly unforgettable experience. I embraced a studious lifestyle, graduating with a 3.97 GPA, and taking some really fun courses. Check out the ',
    text2: ' to view some of the work from my most memorable courses.'
  },
  {
    image: 'images/career.png',
    header: 'My Career',
    text: 'As a recent college graduate, I am eagerly seeking to put my degree to work! Working at a steakhouse for 6 years through highschool and college was an amazing experience and taught me the value of employee loyalty, but my real passion lies with building meaningful software solutions, and I cannot wait to see where the tech industry will take me!' 
  }
]

document.body.innerHTML = await generateTopBar("Home", "") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(false);
await configureTopBar(document, false);

let homePageHTML = '';
  homeData.forEach((block, index) => {
    if (index % 2 == 0) {
      homePageHTML += `
      <div class="home-page-section-even">
        <div class="even-wrapper">
        <img class="section-image-even" src="${block.image}">
        
        <div class="section-content-even">
          <p class="section-header-even">${block.header}</p>
          <p class="section-text-even">${block.text}
          </p>
        </div>
      </div>
      </div>
    `;
    
    }
    
    else {
      homePageHTML += `
      <div class="home-page-section-odd">
        <div class="section-content-odd">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text1} 
            <a class="section-link-odd" href="projects.html">
                Projects Page
            </a>
          ${block.text2}
          </p>
          
        </div>

        <img class="section-image-odd" src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-home-blocks')
    .innerHTML = homePageHTML;
  
  

  
  
