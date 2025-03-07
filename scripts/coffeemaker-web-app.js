import {generateTopBar, configureTopBar, generateFooter} from "./config.js";


const coffeeMakerData = [
  {
    image: '/images/coffee-maker-home.png',
    header: 'Project Introduction',
    text: `I love coffee! For my first major project at NC State, 6 other student developers and I worked to develop the "CoffeeMaker" web application to simulate typical interactions and tasks that take place within a coffee shop. This project is the first full-stack web application I worked on at NC State, and it marked a pivotal moment in my education where I learned Agile software development processes, collaboration in a large team, and having to learn new technologies fast to meet deadlines.`
  },
  {
    image: '/images/barista.png',
    header: 'About CoffeeMaker',
    text: `The CoffeeMaker web application has four different types of user accounts. A basic user can place new coffee orders based on recipes within the shop's menu and pick them up once their order has been fulfilled. A barista account is able to fulfill placed coffee orders, view the shop's order history, and stock the shop's inventory with ingredients. A manager account can do everything a barista can do, add new ingredients used for creating recipes, and create, edit, or delete coffee recipes on the shop's menu. Lastly, a single admin account can create and delete barista and manager accounts as well as promote baristas to managers and demote managers to baristas.`
  },
  {
    image: '/images/coffee-maker-tech.png',
    header: 'Technology',
    text: 'CoffeeMaker is a Spring Boot web application coded with a Java back end that uses Hibernate as an Object-Relational Mapping framework to store application data such as users, orders, recipes, and more within a MySQL database. The front end of CoffeeMaker was built with AngularJS offering a dynamic and responsive user interface that enables smooth client-server interactions via RESTful API calls. This combination of technologies ensures a scalable, maintainable, and efficient web application for coffee shop management.'
  },
  {
    image: '/images/contributions.png',
    header: 'My Inolvment and Contributions',
    text: 'Within our team of 7, I proactively took position as group leader and contributed to a broad range of work involving project management and the design and implementation of both our front-end and back-end systems. Specifically, I designed and implemented three of our front-end web-pages, three of our API controller classes, three back-end models with their relational mappings to MySQL, various corresponding back-end JUnit tests and front-end system tests, and debugging throughout the project as necessary.'
  },
  {
    demo: true,
    header: 'CoffeeMaker Demo',
    src: "/videos/coffee-maker-demo.mp4",
  },
  {
    bigImage: true,
    image: '/images/peer-reviews.png',
    header: 'Peer Reviews',
    text: 'Once of my most joyous moments at NC State was reading these peer reviews from each of my wonderful teammates.' 
  }
]


document.body.innerHTML = await generateTopBar("Projects", "Coffee") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter();
await configureTopBar(document);


let coffeeMakerPageHTML = '';
  coffeeMakerData.forEach((block, index) => {
    if (block.demo) {
      coffeeMakerPageHTML += `
        <div class="home-page-section-even">
        <div class="demo-section">
          <p class="section-header-even">${block.header}</p>
        </div>
        <div class="video-container">
          <iframe class="demo-vid js-demo-vid"
            src=${block.src} allow="autoplay; encrypted-media">
          </iframe>
        </div>
      </div>`
    }
    else if (index % 2 == 0) {
      coffeeMakerPageHTML += `
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
      coffeeMakerPageHTML += `
      <div class="home-page-section-odd">
        <div class="section-content-odd">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text}
          </p>
        </div>

        <img class=`

        if (block.bigImage) {
          coffeeMakerPageHTML += `"section-image-big"`
        }
        else {
          coffeeMakerPageHTML += `"section-image-odd"`
        } 
        coffeeMakerPageHTML += ` src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-coffee-blocks')
    .innerHTML = coffeeMakerPageHTML;

    document.querySelector('.js-demo-vid').addEventListener("load", () => {
      document.querySelector('.js-demo-vid').contentWindow.document.querySelector("video").pause();
    });
