import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const interpreterData = [
  {
    image: '../images/algorithm.png',
    header: 'The New Language',
    text: `417 (pronounced four-seventeen) is a programming language created in NC State's Programming Theory course (CSC-417). 417 is a Turing-complete language, meaning that any problem whose solution can be expressed as a sequence of steps can be implemented in 417. Building an interpreter for this language was my favorite project at NC State, and completing it has provided me with fundamental knowledge that makes learning new programming languages significantly easier.`
  },
  {
    image: '../images/code.png',
    header: 'Coding in 417',
    text: `417 is an expression-based language that includes several implementation features, such as blocks for implementing sequences of expressions, type support for strings, integers, and doubles, built-in functions for math, I/O, etc., iteration via recursion, first-class lambda expressions, the option for both lexical and dynamic scoping, conditional statements with boolean values and expressions, the ability to create new variable bindings with expressions, and the capability to reassign old variable bindings to new expressions.`
  },
  {
    image: '../images/tree.png',
    header: 'How Does It Work?',
    text: `417 code is written in a basic .txt file. This text file is then passed through a parser to produce an abstract syntax tree in the form of a JSON string, which is subsequently processed by an interpreter to execute the code. The parser for 417 was provided by Dr. Jamie Jennings, and each student in the course was tasked with building their own interpreter in a language of their choice.`
  },
  {
    image: '../images/global-env.png',
    header: 'About The Interpreter',
    text: `My interpreter for the 417 language is written in Java. The environment for the language is maintained using a hashmap, where strings serve as the identifier keys and any Object as the value pair. Objects in the environment can be instances of the abstract built-in-function class, lambda expression objects, integers, strings, or doubles. The abstract syntax tree is evaluated through an "eval" function, which applies functions and makes recursive calls to fully evaluate the tree.`
  },
  {
    image: '../images/boolean-flags.png',
    header: 'Additional Cool Things',
    text: `My interpreter includes two boolean flags that enable different implementations of the 417 language. The language follows lexical scoping rules when the "LEXICAL" flag is set to true and dynamic scoping rules when it's set to false (if you're feeling adventurous). When the "MAGIC_LET" flag is set to true, variables created within lambda expressions persist in the environment even after leaving the scope of the expression, allowing for the definition of functions that create variables.` 
  },
  {
    demo: true,
    header: '417 Demo Program',
    src: "https://www.youtube.com/embed/JjPS5ImEaLQ",
    text: 'In this demo, I showcase a comedic implementation of a terrible way to add integers within the 417 language.'
  }

]


document.body.innerHTML = await generateTopBar("Projects", "NewPL") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(true);
await configureTopBar(document, true);


let interpreterPageHTML = '';
  interpreterData.forEach((block, index) => {
    if (block.demo) {
      interpreterPageHTML += `
        <div class="home-page-section-odd">
        <div class="demo-section">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text}
        </div>
        <div class="video-container">
          <iframe class="demo-vid"
            src=${block.src} allow="autoplay; encrypted-media">
          </iframe>
        </div>
      </div>
      `
        
      
  }
    else if (index % 2 === 0) {
      interpreterPageHTML += `
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
      interpreterPageHTML += `
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

  document.querySelector('.js-interpreter-blocks')
    .innerHTML = interpreterPageHTML;
  
 