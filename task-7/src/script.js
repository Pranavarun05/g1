const fetchCountriesAsync = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

//a. Get all countries from Asia continent/region using Filter region.
const displayAllAsiaCountries = async () => {
  try {
    const countries = await fetchCountriesAsync();
    const filteredCountries = countries.filter(
      (country) => country.region === "Asia"
    );
    filteredCountries.forEach((country) => {
      console.log(`${country.name.official} - ${country.region}`);
    });
  } catch (e) {
    console.error("Error while fetching countries", e);
  }
};

displayAllAsiaCountries();

//b. Get all the countries with population less than 2 lakhs using Filter function.
const displayAllCountriesWith2LakhPopulation = async () => {
  try {
    const countries = await fetchCountriesAsync();
    const filteredCountries = countries.filter(
      (country) => country.population < 200000
    );
    filteredCountries.forEach((country) => {
      console.log(`${country.name.official} - ${country.population}`);
    });
  } catch (error) {
    console.error("Error while fetching countries", error);
  }
};

displayAllCountriesWith2LakhPopulation();

//c. Display name, capital, and flag.
const displayNameCapitalAndFlag = async () => {
  try {
    const countries = await fetchCountriesAsync();
    countries.forEach((country) => {
      console.log(
        `Name: ${country.name.official}; Capital: ${country.capital}; Flag: ${country.flags.svg}`
      );
    });
  } catch (error) {
    console.error("Error while fetching countries", error);
  }
};

displayNameCapitalAndFlag();

//d. Print the total number of population of the world using reduce function.
const sumOfAllPopulation = async () => {
  try {
    const countries = await fetchCountriesAsync();
    const totalPopulation = countries.reduce((prev, country) => {
      return prev + country.population;
    }, 0);
    console.log(`Total population: ${totalPopulation}`);
  } catch (error) {
    console.error("Error while fetching countries", error);
  }
};

sumOfAllPopulation();

//e. Display the countries that uses US dollars
const countriesWithUSCurrencies = async () => {
  try {
    const countries = await fetchCountriesAsync();
    const filteredCountries = countries.filter(
      (country) =>
        country.currencies && Object.keys(country.currencies).includes("USD")
    );
    filteredCountries.forEach((country) => {
      console.log(
        `${country.name.official} - ${country.currencies.USD.symbol} USD`
      );
    });
  } catch (e) {
    console.error("Error while fetching countries", e);
  }
};

countriesWithUSCurrencies();
