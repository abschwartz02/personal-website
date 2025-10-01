import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const funFactData = [
  {
    image: 'images/pittsburgh.png',
    header: 'Pittsburgh Sports!',
    text: `Although I’ve never lived there myself, the American origins of the Schwartz family tree are rooted in the steel city of Pittsburgh. Taking after my father, I’ve pledged my undying loyalty to all Pittsburgh sports teams, and I love watching football, baseball, and hockey!`
  },
  {
    image: 'images/dogs.jpg',
    header: 'My 2 Best Friends!',
    text: `These are my dogs! Piper, the German Shepherd, is a gentle spirit who loves head scratches. Otis, the Golden Retriever, is always on the prowl for food scraps, and it's routine for me to toss him an ice cube whenever I grab something from the fridge (AKA "paying the Otis tax").`
  },
  {
    image: 'images/bug.png',
    header: 'A 9 Hour Spelling Mistake!',
    text: `As a new programmer in college, I learned the hard way that programming takes perseverance when I spent nine hours debugging an error caused by typing the capital letter 'O' instead of the number zero within a string. It was truly a humbling moment in my journey as a programmer, and it taught me the importance of paying attention to detail!` 
  }
]


document.body.innerHTML = await generateTopBar("FunFacts", "") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(false);
await configureTopBar(document, false);



let funFactPageHTML = '';
  funFactData.forEach((block, index) => {
    if (index % 2 == 0) {
      funFactPageHTML += `
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
      funFactPageHTML += `
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

  document.querySelector('.js-facts-blocks')
    .innerHTML = funFactPageHTML;