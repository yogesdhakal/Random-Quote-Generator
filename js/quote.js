
/******************************************
Project - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

let quotes = [

    {
        "quote" :"I may not have gone where I intended to go, but I think I have ended up where I needed to be",
        "source"  :"Douglas Adams",  
        "citation"  : "The Long Dark Tea-Time of the Soul",
        "year"  :"1988"
    },
    {
      "quote" :"The fool doth think he is wise, but the wise man knows himself to be a fool",
      "source"  :"William Shakespeare",  
      "citation"  : "As you like it",
      "year"  :"1599"
    },
    {
  
      "quote" :"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten",
      "source"  :"Neil Gaiman",  
      "citation"  : "Coraline",
      "year"  :""
  
    },
    {
      "quote" :"Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring",
      "source"  :"Marilyn Monroe",  
      "citation"  : "",
      "year"  :""
  
    },
    {
  
      "quote" :"I have not failed. I’ve just found 10,000 ways that won’t work",
      "source"  :"Thomas A. Edison",  
      "citation"  : "",
      "year"  :""
  
    }
  
  ]
  
  
  /***
   * `getRandomQuote` function
  ***/
  
  function getRandomQuote(){

    const randomQuote = Math.floor(Math.random() * quotes.length) +1 ;
    return quotes[randomQuote];
  }

  /***
   * Function for random background color 
   ***/

  function changeColor(){
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
}

  
  /***
   * `printQuote` function
  ***/
 function printQuote(){
var quote=getRandomQuote();

let html='';


// displaying the quotes in the quote-box and checking if there is citation and year 

html += `<p class="quote">${quote.quote}</p>
         <p class="source">${quote.source}
         
          `;

          if (quote.citation!==""){
            html += `<span class="citation">${quote.citation}</span>`

          }

          if (quote.year!==""){
            html += `<span class="year">${quote.year}</span>`

          }

          html += `</p>`;

          document.getElementById('quote-box').innerHTML = html;

        }

// The first quote appears on Load 
document.addEventListener('DOMContentLoaded', printQuote,false);

// Changes the background color with every click

document.getElementById('load-quote').addEventListener("click", changeColor, false);
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  
  
  