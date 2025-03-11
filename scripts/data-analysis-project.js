import {generateTopBar, configureTopBar, generateFooter} from "./config.js";


const dataScienceProjectData = [
  {
    image: '../images/magnifyingGlass.png',
    header: 'Project Introduction',
    text: `In the age of infinite information, data is everything! In my data science course at NC State, I got to perform data analysis on real world data to learn the applications of data science for real world problems.`
  },
  {
    image: '../images/stockchart.png',
    header: 'Stock Market Data',
    text: `With a passion for the stock market, our team chose to analyze two sets of comprehensive public data for stocks listed within the S&P 500. If you would like to see the raw data for this projects, click the links below:`,
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
    text: 'To build data models, our team needed one merged data set with no errors. Raw data is almost never perfect, and our dataset were not an exception. In our data sets, occurrences such as the 52-week high and low values being reversed, missing numeric values for certain stocks, and other little things could have hindered our ability to deduce accurate information. So, before performing any data analysis on our stock market data, our team had to prepare the data using SQL queries to create a single data set with every stock entry properly configured and containing all its necessary information.' 
  },
  {
    image: '../images/crystal-ball.png',
    header: 'My Big Goal',
    text: `Can we predict the classification of whether or not a stock's price is within 15% of its 52-week high price, based on factors other than just its price and 52-week high price? This is the question I sought to answer for my portion of data analysis within our team. Finding a solution to this problem could give great insight to which explanatory variables in the data most impact a stock's percentage drop from its 52-week high price. An accurate prediction model could also be used to indicate undervalued stocks that are likely to be performing within 15% of their 52-week high price within the near future.` 
  },
  {
    image: '../images/r-studio.png',
    header: 'My Data Analysis',
    text: `The goal for my model was to have it spit out a simple "Yes" or "No" for if a stock is performing within 15% of its 52-week high price. To accomplish this, I split a portion of our team's data into a training data set to implement different logistic regression models within R Studio and then assess information based on the most accurate model tested with the remaining data. To read a pdf with a full, in-depth look at how I built and tested these models within R Studio, click the link below:`,
    pdf: '../pdfFiles/DataScienceProject_FullRAnalysis.pdf'
    
  },
  {
    image: '../images/green-check.png',
    header: 'Final Results',
    text: `After performing data analysis, a model was developed that predicted the desired goal with 72% accuracy. The test data from this model indicated that a stocks sector, 52-week low, and price were significant attributes that had the most influence on the outcome of the model. This model is considered relatively successful given the sometimes random nature of stock prices, and it could be used for various stock market decision making applications.`
  },
  {
    bigImage: true,
    image: '../images/data-poster.jpg',
    header: 'Presenting The Information',
    text: `After each team member in our group had finished performing data analysis on our data, we all got to present our information on a poster board in front of over 200 students! It was a super fun event, and it was a much better alternative than a final exam.`
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