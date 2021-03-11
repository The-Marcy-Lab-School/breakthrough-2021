console.log("tiny rick!");
/**
 * Code for in class activities, look at solved/index.js
 * for cleaner solution.
 */
const NUTRITION_API_URL = `https://api.edamam.com/api/nutrition-details?app_id=${config.NUTRITION_APP_ID}&app_key=${config.NUTRITION_API_KEY}`;

// making a post request using fetch
// fetch(NUTRITION_API_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     // "Authorization": `Bearer ${token}`
//   },
//   body: JSON.stringify({
//     title: "mashed potatoes",
//     ing: ["4 cups of mash potatoes", "1 cup of cream", "1 garlic clove"],
//   }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw response;
//     }
//     return response.json();
//   })
//   .catch((err) => {
//     const error = err.text();
//     console.log(error);
//     error.then((message) => console.log(message));
//   })
//   .then((data) => {
//     // throw new Error(" woah ");
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("here");
//   });
// .catch((err) => console.log(err));

// use fetch to make a get request
// fetch(NUTRITION_API_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     //
//     // whatever you want to do
//   });

// Discuss using async await
async function getData() {
  try {
    const response = await fetch(NUTRITION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: "mashed potatoes",
        ing: ["4 cups of mash potatoes", "1 cup of cream", "1 garlic clove"],
      }),
    });

    if (!response.ok) {
      // handle this
      // throw response;
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    // more logic
    console.log("finally");
  }
}

// getData();

async function getData() {
  const response = await fetch(NUTRITION_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      title: "mashed potatoes",
      ing: ["4 cups of mash potatoes", "1 cup of cream", "1 garlic clove"],
    }),
  });
}
// How can we rewrite the same things using our async await syntax

// How do we support error handling in async/await...?

// Try/catch statements
