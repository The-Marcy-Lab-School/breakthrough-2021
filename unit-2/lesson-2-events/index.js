function run() {
  const text = document.getElementById("text");

  // debugger;
  const handleClick = (event) => {
    console.log(event);
  };

  text.addEventListener("click", handleClick);
  // text.removeEventListener("click", handleClick);
}
// window.addEventListener("DOMContentLoaded", run);

// TODO: check
window.addEventListener("keydown", (e) => {
  let letter = e.key.toLowerCase();
  switch (e.key) {
    case "j":
      console.log(`you pressed j`);
      break;
    default:
      console.log("something was pressed");
  }
});

// const searchInput = document.getElementById("search-input");
// let timeout;

// searchInput.addEventListener("input", () => {
//   // pretending we are hitting an external api
//   clearTimeout(timeout);
//   timeout = setTimeout(() => console.log("Hitting an api!"), 500);
// });
