// event propogation

const handleClick = function (e) {
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

  console.log(`Box: ${this.id} - ${phase}`);
  // if (e.target.id === this.id) {
  //   console.log(`Box: ${e.target.id} - ${phase}`);
  // }
};

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleClick, true);
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
