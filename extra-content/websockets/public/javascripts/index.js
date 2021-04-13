// this is coming from the socket.io library
const socket = io();

// client-side
socket.on("connect", () => {
  console.log("connection make the socket id is ", socket.id); // x8WIv7-mJelg7on_ALbx
});

window.addEventListener("keydown", () => {
  socket.emit("typing", {
    name: "erwins saget",
  });
  //   socket.emit("typing", function () {
  //     return {
  //       name: "erwins saget",
  //     };
  //   });
});

const winButton = document.getElementById("win");
winButton.addEventListener("click", () => {
  socket.emit("winning", "user");
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.on("updated scoreboard", (data) => {
  console.log(data);
});
