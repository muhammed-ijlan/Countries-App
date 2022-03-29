function fetchData() {
  let countryName = document.querySelector("input").value;

  fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => populateValues(data));
}

const card = document.querySelector("#cardResult");

function populateValues(data) {
  let countryName = data[0].name;
  let flag = data[0].flag;
  let capital = data[0].capital;
  let population = data[0].population;
  let region = data[0].region;
  let lName = data[0].altSpellings[2];
  let language = data[0].languages[0].name;
  let currencySymbol = data[0].currencies[0].symbol;
  let currencyName = data[0].currencies[0].name;

  let htmlData = `
  <div class="card" >
  <div style="background-image: url('${flag}');"" class=" card-image">
  </div>
  <div class="card-text">
      <span class="data">${lName}</span>
      <h2>${countryName}</h2>
      <p><span>Language</span> : ${language}</p>
      <p><span>Capital</span> : ${capital}</p>
  </div>
  <div class="card-stats">
      <div class="stat">
          <div class="value">${currencySymbol} <sup>${currencyName}</sup></div>
          <div class="type">Currency</div>
      </div>
      <div class="stat border">
          <div class="value">${(+population / 10000000).toFixed(
            1
          )}<sup>M</sup></div>
          <div class="type">Population</div>
      </div>
      <div class="stat">
          <div class="value">${region}</div>
          <div class="type">Region</div>
      </div>
  </div>
</div>

  `;
  document.querySelector("#cardResult").innerHTML = htmlData;
}
