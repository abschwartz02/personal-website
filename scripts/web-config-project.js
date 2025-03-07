import {generateTopBar, configureTopBar, generateFooter} from "./config.js";



const hitachiData = [
  {
    image: '/images/transformer.png',
    header: 'Project Introduction',
    text: `Power transformers allow for the efficient transmission of energy throughout our modern world. For Hitachi Energy to monitor the condition of their transformers, field engineers interface with a software called the Lumda asset performance management (AMP) system that receives data from sensors attached to individual transformers.`
  },
  {
    image: '/images/data-transfer.png',
    header: 'Data Transfer',
    text: `Data from sensors on transformers cannot be sent directly to the Lumada APM. First, Data is sent over TCP protocol to Hitachi's "Web API Link" software which then makes REST API calls to the Lumada APM over intervals of time sending the desired data from sensors.`
  },
  {
    image: '/images/hitachi-problem.png',
    header: 'The Problem',
    text: 'The Web API Link software serves as a middle man between sensors and the Lumada AMP, but how does it know which sensors to receive data from, what data to ask for, and how often to send it to the Lumada APM? The answer is JSON configuration files. Field engineers at Hitachi Energy were manually creating JSON files to configure sensor data transfer, and given the nature of these files, it was an extremely tedious process.' 
  },
  {
    image: '/images/hitachi-solution.png',
    header: 'Our Solution',
    text: 'Ok, so manually creating and editing Json files are super tedious, now what? What if there was a web application that allowed field engineers to create, modify, and save Json files in an easy and convenient manner? This is what 4 other NC State students and I created to handle the format of 3 different Json files used for configuring the Web API Link software.' 
  },
  {
    image: '/images/asp-net.png',
    header: 'Technology',
    text: 'Our web configurator application was implemented using the ASP.NET MVC framework. This means we had a C# back end with classes representing models of content within different Json files and other controller classes that contained back-end API endpoints. Our front end was built with HTML, CSS, and JavaScript and consisted of 6 different web pages for a fully functioning web application.' 
  },
  {
    image: '/images/contributions.png',
    header: 'My Involvement and Contributions',
    text: 'My technical work on this project consisted of both back end and front end development with an emphasis on the front end. Of the 3 controller classes in our back end, I implemented half of one class and half of another class, particularly dealing with methods involving file IO but also modifying classes as needed when working on front-end web pages. Of the 6 front-end web pages, I implemented 4 of them fully. Outside of implementation, I served as our teams project planning manager, and tasks for this role involved setting task based deadlines base on our requirements, creating detailed plans to meet said deadlines, and ensuring our team was on pace according to these plans.' 
  },
  {
    image: '/images/posters-and-pies.jpg',
    header: 'Presenting',
    text: `Upon finishing our project, our team had the awesome opportunity to participate in NC State's bi-anual "posters and pies" event where we got to share details and a live demo of our project to over 400 students, sponsors, faculty, and family members all while enjoying some pizza! It was an unforgettable experience, and it will be a core memory in my educational journey at NC State.`
  },
  {
    image: '/images/team-photo.jpg',
    header: 'Team Member Shoutout',
    text: 'The four distinguished gentlemen around me in this picture were amazing to be around, and we had a great semester working on this project together. You can click their names below to view their LinkedIn profiles:',
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
document.querySelector('.js-page-container').innerHTML += await generateFooter();
await configureTopBar(document);

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
