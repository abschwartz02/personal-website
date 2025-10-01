import {generateTopBar, configureTopBar, generateFooter} from "./config.js";



const hitachiData = [
  {
    image: '../images/transformer.png',
    header: 'Project Introduction',
    text: `Power transformers enable the efficient transmission of energy throughout our modern world. To monitor the condition of their transformers, Hitachi Energy uses a software called the Lumda Asset Performance Management (AMP) system, which receives data from sensors attached to individual transformers.`
  },
  {
    image: '../images/data-transfer.png',
    header: 'Data Transfer',
    text: `Data from sensors on transformers cannot be sent directly to the Lumada APM. Instead, data is first sent over the TCP protocol to Hitachi's "Web API Link" software, which then makes REST API calls to the Lumada APM at set intervals, transmitting the desired sensor data.`
  },
  {
    image: '../images/hitachi-problem.png',
    header: 'The Problem',
    text: `The Web API Link software serves as an intermediary between the sensors and the Lumada APM, but how does it know which sensors to receive data from, what data to request, and how often to send it to the Lumada APM? The answer lies in JSON configuration files. Field engineers at Hitachi Energy were manually creating these JSON files to configure sensor data transfer, and given their complexity, it was an extremely tedious process.` 
  },
  {
    image: '../images/hitachi-solution.png',
    header: 'Our Solution',
    text: 'Manually creating and editing JSON files is extremely tedious, so what if there were a web application that allowed field engineers to create, modify, and save JSON files in an easy and convenient manner? That’s exactly what four other NC State students and I built to handle the formatting of three different JSON files used for configuring the Web API Link software.' 
  },
  {
    image: '../images/asp-net.png',
    header: 'Technology',
    text: 'Our web configurator application was implemented using the ASP.NET MVC framework. This meant we had a C# backend with classes representing models for content within different JSON files, as well as other controller classes containing backend API endpoints. The frontend was built with HTML, CSS, and JavaScript, consisting of six different web pages to create a fully functional web application.' 
  },
  {
    image: '../images/contributions.png',
    header: 'My Involvement and Contributions',
    text: `My technical work on this project involved both backend and frontend development, with an emphasis on the frontend. Of the three controller classes in our backend, I implemented half of one class and half of another, primarily focusing on methods related to file I/O while also modifying classes as needed for the frontend web pages. Out of the six frontend web pages, I fully implemented four. In addition to implementation, I served as our team's project planning manager. My responsibilities included setting task-based deadlines according to our requirements, creating detailed plans to meet those deadlines, and ensuring our team stayed on track.` 
  },
  {
    image: '../images/posters-and-pies.jpg',
    header: 'Presenting',
    text: `Upon finishing our project, our team had the awesome opportunity to participate in NC State's biannual "Posters and Pies" event, where we shared details and gave a live demo of our project to over 400 students, sponsors, faculty, and family members—all while enjoying some pizza! It was an unforgettable experience and will be a core memory in my educational journey at NC State.`
  },
  {
    image: '../images/team-photo.jpg',
    header: 'Team Member Shoutout',
    text: 'The four distinguished gentlemen around me in this picture were a pleasure to work with, and we had a great semester collaborating on this project. You can click their names below to view their LinkedIn profiles:',
    team: [
      {
        name: 'Zach Lucas',
        link: 'https://www.linkedin.com/in/zacharyslucas/'
      },
      {
        name: 'Thomas Elpers',
        link: 'https://www.linkedin.com/in/thomas-elpers/'
      },
      {
        name: 'Amin Nagda',
        link: 'https://www.linkedin.com/in/amin-nagda-31a2a3208/'
      },
      {
        name: 'Yashodev Reddy',
        link: 'https://www.linkedin.com/in/yashodev/'
      }

    ] 
    
  },

]

document.body.innerHTML = await generateTopBar("Projects", "Hitachi") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(true);
await configureTopBar(document, true);

let hitachiPageHTML = '';
  hitachiData.forEach((block, index) => {
    if (index % 2 == 0) {
      hitachiPageHTML += `
      <div class="home-page-section-even">
        <div class="even-wrapper">
        <img class="section-image-even" src="${block.image}">
        
        <div class="section-content-even">
          <p class="section-header-even">${block.header}</p>
          <p class="section-text-even">${block.text}</p>
        </div>
      </div>
    `;
    
    }
    
    else {
      hitachiPageHTML += `
      <div class="home-page-section-odd">
        <div class="section-content-odd">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text}</p>`

          if (block.team) {
            block.team.forEach(teamMember => {
              hitachiPageHTML += `
                <a class="no-underline" href="${teamMember.link}" target="_blank">
                  <p class="section-link-odd">${teamMember.name}</p>
                </a>
              `;
            });
          }

        hitachiPageHTML += `</div>
        
        <img class="section-image-odd" src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-hitachi-blocks')
    .innerHTML = hitachiPageHTML;
