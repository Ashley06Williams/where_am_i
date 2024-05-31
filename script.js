'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name[0]}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText)[0]; // this = request
//     console.log(data);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} million people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
//   // https://countries-api-836d.onrender.com/countries/
// };

// getCountryData('south africa');
// getCountryData('usa');
// getCountryData('germany');

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)[0]; // this = request
    console.log(data);

    // render country
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // AJAX neighbour country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/name/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
      // renderCountry(data2);
    });
  });
};

getCountryAndNeighbour('usa');
// https://countries-api-836d.onrender.com/countries/

setTimeout(() => {
  console.log(' 1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
    }, 1000);
  }, 1000);
}, 1000);
*/

// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       // console.log(data.borders);

//       const neighbour = data[0].borders;
//       // if (!neighbour) return;
//       // console.log(neighbour[0]);

//       fetch(`https://restcountries.com/v3.1/aplha/${neighbour[0]}`)
//         .then(function (response) {
//           // console.log(response);
//           if (!response.ok)
//             throw new Error(
//               `Country ${country} not found (${response.status})`
//             );

//           return response.json();
//         })
//         .then(function (dataRes) {
//           // console.log(data);
//           renderCountry(dataRes[0], 'neighbour');
//         })
//         .catch(function (err) {
//           console.error(`${err} 😥😥😥`);
//           return renderError(
//             `Something went wrong 😥😥 ${err.message}. Try again!`
//           );
//         })
//         .finally(() => {
//           countriesContainer.style.opacity = 1;
//         });
//       // .then(data => renderCountry(data, 'neighbour'));
//       // // console.log(neighbour);
//     });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`);
//     .then(res => res.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data.borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}
//     `);
//     })
//     .then(res => {
//       res.json();
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     });
// };

// Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       // Country 2
//       fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     'Country not found'
//   ).then(function (data) {
//     renderCountry(data[0]);

//     const neighbour = data[0].borders;

//     return getJSON(
//       `https://restcountries.com/v3.1/aplha/${neighbour[0]}`,
//       'Country not found'
//     )
//       .then(function (dataRes) {
//         renderCountry(dataRes[0], 'neighbour');
//       })
//       .catch(function (err) {
//         console.error(`${err} 😥😥😥`);
//         return renderError(
//           `Something went wrong 😥😥 ${err.message}. Try again!`
//         );
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
//   countriesContainer.style.opacity = 1;
// });

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating
// �
// �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// 30
// The Complete JavaScript Course
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK

// My API code: 3678396061144699796x114419
// https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=3678396061144699796x114419

const getWhereAmI = function (url) {
  return fetch(url).then(response => response.json());
};

const message = function (city, countryName) {
  return console.log(`You are in ${city}, ${countryName}`);
};

const whereAmI = function (lat, long) {
  getWhereAmI(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=3678396061144699796x114419`
  )
    .then(response => message(response.city, response.country))
    .catch();
};

whereAmI(52.508, 13.381);
