import {generateTopBar, configureTopBar, generateFooter} from "./config.js";


const dataScienceProjectData = [
  {
    image: '../images/magnifyingGlass.png',
    header: 'Project Introduction',
    text: `In the age of infinite information, data is everything! In my Data Science course at NC State, I had the opportunity to analyze real-world data and explore the applications of data science in solving real-world problems.`
  },
  {
    image: '../images/stockchart.png',
    header: 'Stock Market Data',
    text: `With a passion for the stock market, our team chose to analyze two sets of comprehensive public data for stocks listed in the S&P 500. If you'd like to view the raw data for this project, click the links below:`,
    dataSets: [
      {
        link: 'https://github.com/datasets/s-and-p-500-companies/blob/main/data/constituents.csv',
        description: 'Categorical Stock Information'
      },
      {
        link: 'https://datahub.io/core/s-and-p-500-companies-financials#data-cli',
        description: 'Numerical Stock Information'
      }
      
      
    ]
  },
  {
    image: '../images/sql.png',
    header: 'Preparing The Data',
    text: 'To build data models, our team needed a merged dataset with no errors. Raw data is almost never perfect, and our dataset was no exception. Issues such as reversed 52-week high and low values, missing numeric values for certain stocks, and other inconsistencies could have hindered our ability to derive accurate insights. So, before performing any data analysis on our stock market data, our team used SQL queries to prepare the data, creating a single dataset with each stock entry properly configured and containing all its necessary information.' 
  },
  {
    image: '../images/crystal-ball.png',
    header: 'My Big Goal',
    text: `Can we predict whether a stock's price is within 15% of its 52-week high, based on factors other than just its price and 52-week high? This is the question I aimed to answer for my portion of the data analysis within our team. Finding a solution to this problem could provide valuable insights into which explanatory variables most impact a stock's percentage drop from its 52-week high. An accurate predictive model could also help identify undervalued stocks that are likely to perform within 15% of their 52-week high in the near future.` 
  },
  {
    image: '../images/r-studio.png',
    header: 'My Data Analysis',
    text: `The goal of my model was to output a simple 'Yes' or 'No' indicating whether a stock is performing within 15% of its 52-week high. To achieve this, I split a portion of our team's data into a training dataset and implemented various logistic regression models in R Studio. I then assessed the results based on the most accurate model, tested using the remaining data. To read a PDF with a full, in-depth explanation of how I built and tested these models in R Studio, click the link below:`,
    pdf: '../pdfFiles/DataScienceProject_FullRAnalysis.pdf'
    
  },
  {
    image: '../images/green-check.png',
    header: 'Final Results',
    text: `After performing data analysis, a model was developed that predicted the desired outcome with 72% accuracy. The test data revealed that a stock's sector, 52-week low, and price were significant attributes influencing the model's outcome. This model is considered relatively successful, given the often unpredictable nature of stock prices, and it could be applied to various stock market decision-making processes.`
  },
  {
    bigImage: true,
    image: '../images/data-poster.jpg',
    header: 'Presenting The Information',
    text: `After each team member completed their data analysis, we had the opportunity to present our findings on poster boards in front of over 200 students! It was a fun event and a much better alternative to a final exam.`
  }


]

document.body.innerHTML = await generateTopBar("Projects", "Data") + document.body.innerHTML;
document.querySelector('.js-page-container').innerHTML += await generateFooter(true);
await configureTopBar(document, true);




let dataSciencePageHTML = '';
  dataScienceProjectData.forEach((block, index) => {
    if (index % 2 == 0) {
      dataSciencePageHTML += `
      <div class="home-page-section-even">
        <div class="even-wrapper">
        <img class=`
        if (block.bigImage) {
          dataSciencePageHTML += `"section-image-big "`
        }
        else {
          dataSciencePageHTML += `"section-image-even "`
        }
        dataSciencePageHTML += `src="${block.image}">
        
        <div class="section-content-even">
          <p class="section-header-even">${block.header}</p>
          <p class="section-text-even">${block.text}</p>`

          if (block.pdf) {
            dataSciencePageHTML += `
               <a class="no-underline" href="${block.pdf}" download>
                <p class="section-link-even">Full R Studio Data Analysis</p>
              </a>
            `;
          }
        dataSciencePageHTML += `</div>
      </div>
      </div>
    `;
    
    }
    
    else {
      dataSciencePageHTML += `
      <div class="home-page-section-odd">
        <div class="section-content-odd">
          <p class="section-header-odd">${block.header}</p>
          <p class="section-text-odd">${block.text}</p>`

          if (block.dataSets) {
            block.dataSets.forEach((dataSet, index) => {
              dataSciencePageHTML += `
                <a class="no-underline" href="${dataSet.link}" target="_blank">
                  <p class="section-link-odd">Data Set ${(index + 1) + " - " + dataSet.description} </p>
                </a>
              `;
            });
          }

        dataSciencePageHTML+= `</div>

        <img class="section-image-odd" src="${block.image}">
      </div>
    `;
    }
    
  });

  document.querySelector('.js-data-blocks')
    .innerHTML = dataSciencePageHTML;