import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const homeData = [
  {
    image: 'images/question-mark.png',
    header: 'Who is Andrew Schwartz?',
    text: `The gentleman in the picture above is none other than yours truly. I love coding and built this website from scratch to document my career journey, showcase some projects, and highlight my unique personality.`
  },
  {
    image: 'images/ncsu-wolf.png',
    header: 'Education',
    linkToProjects: true,
    text1: 'Go Pack! Earning my CS degree as a member of Wolfpack Nation was a truly unforgettable experience. I embraced a studious lifestyle, graduated with a 3.97 GPA, and took some really fun courses. Check out the ',
    text2: ' page to see some of the work from my most memorable courses.'
  },
  {
    image: 'images/career.png',
    header: 'My Career',
    text: `As a recent college graduate, I am eager to put my degree to work! Working at a steakhouse for six years through high school and college was an amazing experience that taught me the value of employee loyalty. However, my true passion lies in building meaningful software solutions, and I can't wait to see where the tech industry takes me!` 
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
            <a class="section-link-odd" href="projects.html">Projects</a>
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
  
  

  
  
