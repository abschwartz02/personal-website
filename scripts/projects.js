import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const projectData = [
  {
    image: 'images/hitachi.png',
    header: 'My Capstone Project',
    text: `To show the culmination of everything I had learned while attending NC State, I had the privilege of developing software in a sponsor-lead project in collaboration with Hitachi Energy. Within a team of 5 seniors over the span of an entire semester, I helped build a fully functioning full-stack web application to serve as a user interface for the creation and modification of complex Json files.`,
    link: 'projects/web-config-project.html'
  },
  {
    image: 'images/stock.png',
    header: 'Stock Data Analysis Project',
    text: 'Data, Data, Data! Data is everything! In my Data Science class at NC State, I had the awesome opportunity of working in a team of 3 to help to gather, wrangle and prepare, and build predictive models with data on stocks listed within the S&P 500.',
    link: 'projects/data-analysis-project.html' 
  },
  {
    image: 'images/interpreter.png',
    header: 'Building a New Programming Interpreter',
    text: 'Yup, thats right! One of my favorite projects at NC State was building a fully functioning interpreter for a new programming language. In honor of the course number for my programming theory class, the language was named "417" (pronounced four-seventeen). This project has given me a fundamental understanding of how code works, and this fundamental knowledge has made learning new programming languages significantly easier for me.',
    link: 'projects/new-language-project.html' 
    
  },
  {
    image: 'images/coffee-shop.png',
    header: 'CoffeeMaker Web Application',
    text: 'As a software engineer, coffee holds a special place in my heart. The CoffeeMaker Web Application simulates typical interactions and tasks that take place within a coffee shop. This project is the first full-stack web application I worked on at NC State, and it marked a pivotal moment in my education where I learned Agile software development processes, collaboration in a large team, and having to learn new technologies fast to meet deadlines.',
    link: 'projects/coffeemaker-web-app.html' 
  }

]
document.body.innerHTML = await generateTopBar("Projects", "") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(false);
await configureTopBar(document, false);

let homePageHTML = '';
  projectData.forEach((block, index) => {
    if (index % 2 == 0) {
      homePageHTML += `
      <div class="home-page-section-even">
        <div class="even-wrapper">
        <img class="section-image-even" src="${block.image}">
        
        <div class="section-content-even">
          <p class="section-header-even">${block.header}</p>
          <p class="section-text-even">${block.text}</p>
          <a class="no-underline" href="${block.link}">
            <p class="section-link-even">Click Here for More Details</p>
          </a>
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
          <p class="section-text-odd">${block.text}</p>
          <a class="no-underline" href="${block.link}">
            <p class="section-link-odd">Click Here for More Details</p>
          </a>
          
        </div>

        <img class="section-image-odd" src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-project-blocks')
    .innerHTML = homePageHTML;
