const fetchCountriesAsync = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

const displayCountriesConsole = async () => {
  try {
    const countries = await fetchCountriesAsync();
    countries.forEach((country) => {
      console.log(`${country.name.official} - ${country.capital}`);
    });
  } catch (e) {
    console.error("Error while fetching countries", e);
  }
};

displayCountriesConsole();
