
const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {

  const response = await fetch(url); 

  const results = awaitresponse.json();

  const facts = results.all;

  resultsContainer.innerHTML = "";
  
  for(let i = 0; < facts.length; i++) {

  }
}
console.log(getJackets);

getJackets();
