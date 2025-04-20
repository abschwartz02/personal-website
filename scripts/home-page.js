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
    text: `My journey into the tech industry officially began when I joined Prometheus Group, a software company based in Raleigh, as a Quality Assurance Engineer. Every day, I get to dig into real software, test its limits, and collaborate with talented developers to make sure our products are running smoothly for clients. I love the puzzle-solving aspect of QA, and exploring software in unexpected ways and uncovering hidden bugs feels like a digital treasure hunt. Starting my career here has been both exciting and incredibly rewarding, and I’m eager to see where this path in tech will take me next.` 
    
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
  
  

  
  
