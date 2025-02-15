import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const projectData = [
  {
    image: 'images/hitachi.png',
    header: 'My Capstone Project',
    text: `To show the culmination of everything I had learned while attending NC State, I had the priveige of developing software in sponsor-lead project in collaboration with Hitachi Energy. Within a team of 5 seniors over the span of an entire semester, I helped build a fully functioning full-stack web application to serve as a user interface for the creation and modification of complex Json files.`
  },
  {
    image: 'images/ncsu-wolf.png',
    header: 'Education',
    text: 'Go pack! Earning my CS degree as a member of the wolfpack nation was a truly unforgettable experience. I embraced a studious lifestyle, graduating with a 3.97 GPA, and taking some really fun courses. Check out the projects page to view some of the work from my most memorable courses.'
  },
  {
    image: 'images/interpreter.png',
    header: 'Building a New Programming Language',
    text: 'Yup, thats right! One of my favorite projects at NC State was building a fully functioning interpreter for a new programming language. In honor of the course number for my programming theory class, the language was named "417" (pronounced four-seventeen). This project has given me a fundamental understanding of how code in works, and this fundamental knowledge has made learning new programming languages significantly easier for me.'
    
  }

]
document.body.innerHTML = await generateTopBar("Projects") + document.body.innerHTML;
document.body.innerHTML += await generateFooter();
await configureTopBar(document);

let homePageHTML = '';
  projectData.forEach((block, index) => {
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

  document.querySelector('.js-project-blocks')
    .innerHTML = homePageHTML;
