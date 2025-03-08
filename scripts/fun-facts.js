import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const funFactData = [
  {
    image: 'images/pittsburgh.png',
    header: 'Pittsburgh Sports!',
    text: `Despite never living there myself, the American origins of the Schwartz family tree is rooted in the steel city of Pittsburgh. Taking after my father, I have pledged my undying loyalty to all pittsburgh sports teams, and I love to watch football, baseball, and hockey!`
  },
  {
    image: 'images/dogs.jpg',
    header: 'My 2 Best Friends!',
    text: `These are my dogs! Piper, the German Shepheard, is a gentle spirit who loves head scratches. Otis, the golden retriever, is always on the prowl for food scraps, and it's routine for me to toss him an ice cube whenever I grab anything from the fridge (AKA "paying the Otis tax").`
  },
  {
    image: 'images/bug.png',
    header: 'A 9 Hour Spelling Mistake!',
    text: 'As a new programmer in college, I learned that programming takes perseverance the hard way when I spent 9 hours debugging an error caused by typing out the capital letter "O" instead of the number zero within a string. It was truly a humbling moment in my journey as a programmer, and it taught me the importance of paying attention to detail!' 
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