import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const projectData = [
  {
    image: 'images/hitachi.png',
    header: 'My Capstone Project',
    text: `To showcase everything I learned at NC State, I had the privilege of developing software in a sponsor-led project in collaboration with Hitachi Energy. As part of a team of five seniors over an entire semester, I helped build a fully functional full-stack web application serving as a user interface for creating and modifying complex JSON files.`,
    link: 'projects/web-config-project.html'
  },
  {
    image: 'images/stock.png',
    header: 'Stock Data Analysis Project',
    text: 'Data, data, data! Data is everything! In my Data Science class at NC State, I had the incredible opportunity to work in a team of three to gather, wrangle, and prepare data to build predictive models that can predict factors for stocks listed in the S&P 500.',
    link: 'projects/data-analysis-project.html' 
  },
  {
    image: 'images/interpreter.png',
    header: 'Building a New Programming Interpreter',
    text: `One of my favorite projects at NC State was building a fully functional interpreter for a new programming language. In honor of my programming theory class’s course number, the language was named "417" (pronounced four-seventeen). This project gave me a fundamental understanding of how code works, making it significantly easier for me to learn new programming languages.`,
    link: 'projects/new-language-project.html' 
    
  },
  {
    image: 'images/coffee-shop.png',
    header: 'CoffeeMaker Web Application',
    text: 'As a software engineer, coffee holds a special place in my heart. The CoffeeMaker Web Application simulates typical interactions and tasks in a coffee shop. This project was the first full-stack web application I worked on at NC State, marking a pivotal moment in my education. Through it, I learned Agile software development processes, teamwork in a large group, and how to quickly adapt to new technologies to meet deadlines.',
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
