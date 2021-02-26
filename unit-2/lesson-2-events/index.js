// event propogation

const handleClick = function (e) {
  // e.stopPropagation();
  let phase;

  switch (e.eventPhase) {
    case 1:
      phase = "Capturing";
      break;
    case 2:
      phase = "At Target";
      break;
    case 3:
      phase = "Bubbling";
      break;
    default:
  }

  // console.log(this.innerText);
  console.log("The target element had an id of ", e.target.id);
  console.log(`Box: ${this.id} - ${phase}`);
  // if (e.target.id === this.id) {
  //   console.log(`Box: ${e.target.id} - ${phase}`);
  // }
};

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  if (i !== 1) {
    boxes[i].addEventListener("click", handleClick);
  }
}
// function run() {
//   const text = document.getElementById("text");

//   // debugger;
//   const handleClick = (event) => {
//     // console.log(event);
//     console.log(event.phase);
//   };

//   text.addEventListener("click", handleClick);
// }

// window.addEventListener("DOMContentLoaded", run);

// TODO: check
// window.addEventListener("keydown", (e) => {
//   let letter = e.key.toLowerCase();
//   switch (e.key) {
//     case "j":
//       console.log(`you pressed j`);
//       break;
//     default:
//       console.log("something was pressed");
//   }
// });

// const searchInput = document.getElementById("search-input");
// let timeout;

// searchInput.addEventListener("input", () => {
//   // pretending we are hitting an external api
//   clearTimeout(timeout);
//   timeout = setTimeout(() => console.log("Hitting an api!"), 500);
// });

// const link = document.getElementById("link");

// link.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("I clicked this");
// });
