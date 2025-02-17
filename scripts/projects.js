import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const projectData = [
  {
    image: 'images/hitachi.png',
    header: 'My Capstone Project',
    text: `To show the culmination of everything I had learned while attending NC State, I had the priveige of developing software in a sponsor-lead project in collaboration with Hitachi Energy. Within a team of 5 seniors over the span of an entire semester, I helped build a fully functioning full-stack web application to serve as a user interface for the creation and modification of complex Json files.`
  },
  {
    image: 'images/stock.png',
    header: 'Stock Data Analysis Project',
    text: ''
  },
  {
    image: 'images/interpreter.png',
    header: 'Building a New Programming Language',
    text: 'Yup, thats right! One of my favorite projects at NC State was building a fully functioning interpreter for a new programming language. In honor of the course number for my programming theory class, the language was named "417" (pronounced four-seventeen). This project has given me a fundamental understanding of how code in works, and this fundamental knowledge has made learning new programming languages significantly easier for me.'
    
  },
  {
    image: 'images/coffee-shop.png',
    header: 'CoffeeMaker Web Application',
    text: 'As a software engineer, coffeer holds a special place in my heart. The CoffeeMaker Web Application simulates typical interactions and tasks that take place within a coffee shop. This project is the first full-stack web application I worked on at NC State, and it marked a pivotol moment in my education where I learned Agile software development processes, collaboration in a large team, and having to learn new technologies fast to meet deadlines.' 
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
