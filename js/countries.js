const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');

    countries.map(countries =>{
        // console.log(countries.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name: ${countries.name.common}</h3>
        <p>Capital: ${countries.capital ? countries.capital[0] : "No capital"}</p>
        <button onclick="loadCountryDetails('${countries.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code => {
    //* https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountrieDetalis(data))
}

const displayCountrieDetalis = countries =>{
    console.log(countries[0].flags.png);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h1>Name: ${countries[0].name.common} </h1>
    <img src="${countries[0].flags.png}">
    `
}

loadCountries();