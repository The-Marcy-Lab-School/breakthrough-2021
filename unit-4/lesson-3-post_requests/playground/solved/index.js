console.log("tiny rick!");

const NUTRITION_API_URL = `https://api.edamam.com/api/nutrition-details?app_id=${config.NUTRITION_APP_ID}&app_key=${config.NUTRITION_API_KEY}`;

// making a post request using fetch
fetch(NUTRITION_API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "mash potatoes",
    ingr: [
      "4 cups boiled potatoes",
      "1 cup heavy cream",
      "2 tablespoons of salt",
    ],
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    err.text().then((message) => console.log(message));
  });

// Discuss using async await

// How can we rewrite the same things using our async await syntax

async function getData() {
  const response = await fetch(NUTRITION_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "mash potatoes",
      ingr: [
        "4 cups boiled potatoes",
        "1 cup heavy cream",
        "2 tablespoons of salt",
      ],
    }),
  });

  const data = await response.json();

  console.log(data);
}

// getData();

// How do we support error handling in async/await...?
// Try/catch statements

async function getData2() {
  try {
    const response = await fetch(NUTRITION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "mash potatoes",
        ingr: [
          "4 cups boiled potatoes",
          "1 cup heavy cream",
          "2 tablespoons of salt",
        ],
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
