const io = require("socket.io-client");

const socket = io("ws://0.0.0.0:3000", { autoconect: true });

// When the server is connected
socket.on("connect", () => {
  console.log("Socket-io server connected :D");
  socket.send("I connect to the server :D");
});

// When receive emit with "random" name
socket.on("random", (message) => {
  console.log("ramdom:", message);
});

// When receive with send method
socket.on("message", (message) => {
  console.log("message", message);
});

// When the server is disconnected
socket.on("disconnect", () => {
  if (socket.disconnected) {
    console.log("Socket-io server disconnected:(");
  }
});

// Testing sending message
setTimeout(() => {
  socket.emit("random", { message: "Send random message" });
}, 5000);
