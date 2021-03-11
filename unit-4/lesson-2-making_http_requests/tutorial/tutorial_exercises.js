console.log(config.API_KEY);

const HOME_API = config.API_KEY;
console.log(HOME_API);

// root element
const mainEl = document.getElementById("main");

function showLoadingData() {
  if (mainEl) {
    mainEl.innerHTML = `
        <div>
            <p>Loading...</p>
        </div>
    `;
  }
}

function getData(response) {
  return response.json();
}

function generateListItem(data, cb) {
  return data.map(cb).join("");
}

function fetchData(url) {
  showLoadingData();

  //   const data = fetch(url).then(getData);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((people) => {
      const html = generateListItem(people, (person) => {
        return `
        <dl>
            <dt>${person.name}</dt>
            <dd>${person.gender}</dd>
            <dd>${person.age}</dd>
        </dl>
      `;
      });
      mainEl.innerHTML = `
      <ul>${html}</ul>
    `;
    });
}

const apiUrl = "https://ghibliapi.herokuapp.com/people";

fetchData(apiUrl);
