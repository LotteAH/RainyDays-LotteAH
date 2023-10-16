
const url = "https://api.noroff.dev/api/v1/rainy-days";

async function getJackets() {

  const response = await fetch(url); 

  const results = awaitresponse.json();

  const facts = results.all;

  resultsContainer.innerHTML = "";
  
  for(let i = 0; < rainy-days.length; i++) {
      console.log(id[i].text);

      resultsContainer.innerHTML += `<div class"result">${rainy-days[i].text}</div>`;
  }
}
console.log(getJackets);

getJackets();
