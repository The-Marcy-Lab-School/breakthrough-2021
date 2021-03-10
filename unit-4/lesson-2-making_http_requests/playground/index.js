console.log(`script init`);

const token =
  "wFOf7XW7UZj3ol7QROVKdozJLNgY3iTy0ndStl73MyvpOdnwox4wPXBTKMCWZTnH";

// With using XMLHttpRequest
// init xmlhttprequest object
const xmlhttp = new XMLHttpRequest();

// can change to get different artists
const artistId = "888";
const FORMAT = "plain";

const url = `https://api.genius.com/artists/${artistId}?access_token=${token}&text_format=${FORMAT}`;
// using artist api
xmlhttp.open("GET", url);

// We don't need these for this api, but this is how we can set headers
// in the event we need to set headers
// xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
// For cors issue
// xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
// For accepting different types
// xmlhttp.setRequestHeader("Accept", "*/*");

// "success" function
function reqListener() {
  console.log(`making http requext with XMLHttpRequest 🤘🏾`);
  var data = JSON.parse(this.responseText);
  console.dir(data);
}
xmlhttp.onload = reqListener;

// error function
function reqError(err) {
  console.log("Fetch Error :-S", err);
}
xmlhttp.onerror = reqError;

// actually make the request
xmlhttp.send();

/**
 * Doing the same thing using fetch
 */
function onSuccess(res) {
  console.log(`Fetching from fetch`);
  console.dir(res);
}

function onError(err) {
  console.log(`Oh no! 🥴`);
  console.dir(err);
}

fetch(url)
  .then((response) => response.json())
  .then(onSuccess)
  .catch(onError);

/**
 * Now we take a look at async/await
 */
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(`So fresh and so clean 😮`);
  console.dir(data);
}

// However, how would add error handling here...?

// Promises are utilized under the hood to allow us to return a value
// immediately from an async function, and then run code upon completion

// Example without using http
// we don't need the 2nd argument, just demonstrating that it's use
let waiting = new Promise(function (uponSuccessDoThis, uponFailureDoThis) {
  setTimeout(() => {
    // uponSuccessDoThis();
    // try {
    //   throw new Error(`DA BOMB DOT COM 🤬💣`);
    // } catch (err) {
    //   uponFailureDoThis();
    // }
  }, 3000);
});

waiting.then(
  () => {
    console.log(`done son! `);
  },
  () => {
    console.log(`yup, something went wrong there`);
  }
);
