import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

const interpreterData = [
  {
    image: '../images/algorithm.png',
    header: 'The New Language',
    text: `417 (pronounced four-seventeen) is a programming language created within NC State's programming theory course (CSC-417). 417 is a Turing-complete language. This means that if a solution to any problem can be expressed as a sequence of steps, then 417 is able to implement it. Building an interpreter for this language was my favorite project at NC State, and completing it has given me fundamental knowledge that makes learning new programming languages significantly easier.`
  },
  {
    image: '../images/code.png',
    header: 'Coding in 417',
    text: `417 is a expression based language that contains many different implementation features including: blocks for implementing sequences of expressions, type support for strings, integers, and doubles, built in functions for math, I/O, etc., iteration via recursion, first-class lambda expressions, the option for both lexical and dynamic scoping, conditional statements with boolean values and expression, creating new variable bindings with expressions, and reassigning old variable bindings to new expressions.`
  },
  {
    image: '../images/tree.png',
    header: 'How Does It Work?',
    text: `417 code is written on a basic .txt file. This text file is then piped through a parser to produce an abstract syntax tree in the format of a Json string, and this string is then piped through an interpreter to execute the code. The parser for 417 was provided by Dr. Jamie Jennings, and each student in the course was tasked with building their own interpreter in a language of their choice.`
  },
  {
    image: '../images/global-env.png',
    header: 'About The Interpreter',
    text: 'My interpreter for the 417 language is coded in Java. The environment for the language is maintained through a hashmap with strings being the identifier key and any Object being its value pair. Objects of the environment can be children of the abstract built-in-function class, lambda expression objects, integers, strings, or doubles. The abstract syntax tree is evaluated through an "eval" function, which applies functions and makes various recursive calls to completely evaluate the abstract syntax tree.' 
  },
  {
    image: '../images/boolean-flags.png',
    header: 'Additional Cool Things',
    text: `My interpreter contains two boolean flags that allow for different implementations of the 417 language. 417 has lexical scoping rules when the "LEXICAL" boolean is set to true and dynamic rules when it's set to false(if you're feeling psychotic). When the "MAGIC_LET" boolean is set to true, variables created within lambda expressions persist in the environment even after leaving the scope of the lambda expression, and this allows for defining functions that create variables.` 
  },
  {
    demo: true,
    header: '417 Demo Program',
    src: "../videos/417Demo.mp4",
    text: 'In this demo, I show a comedic implemention for a horrible way to add integers within the 417 language.'
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
          <iframe class="demo-vid js-demo-vid"
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
  
  document.querySelector('.js-demo-vid').addEventListener("load", () => {
    document.querySelector('.js-demo-vid').contentWindow.document.querySelector("video").pause();
  });