var countryReq = new XMLHttpRequest();
countryReq.open("GET", "https://restcountries.eu/rest/v2/all");
countryReq.send();
countryReq.onload = function () {
  let countryData = JSON.parse(this.response);
  /*
  //! - Get all the countries from Asia continent /region using Filter function
  let asianCountries = countryData
    .filter((country) => {
      return country.region == "Asia";
    })
    .map((e) => e.name);
  console.log(asianCountries);
  //! - Get all the countries with population of less than 2 lacs using Filter function
  let plnGrt2L = countryData
    .filter((country) => {
      return country.population < 200001;
    })
    .map((e) => e.name);
  console.log(plnGrt2L);
  */
  //!  - Print the following details name, capital, flag using forEach function
  /*
let nCF = {};
  countryData.forEach((country) => {
    nCF[country].name = {
      Capital: country.callingCodes.capital,
      Flag: country.flag,
    };
  });
  console.log(nCF);
*/
  /*
  //! - Print the total population of countries using reduce function
  let plnGrt2L = countryData
    .filter((country) => {
      return country.population;
    })
    .map((e) => e.population);
  console.log(plnGrt2L.reduce((a, e) => a + e));
*/

  //! - Print the country which use US Dollars as currency

  /*
  let dollarCountries = countryData.filter((country) => {
    return country.currencies[0].code == "USD";
  });
  console.log(dollarCountries);
};
*/
