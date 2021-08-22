const io = require("socket.io-client");

const socket = io("ws://0.0.0.0:3000", { autoconect: true });

socket.on("connect", () => {
  console.log("Socket-io server connected :D");
  socket.send("TE ENVIO ESTO");
});

socket.on("random", (message) => {
  console.log("ramdom:", message);
});

socket.on("message", (message) => {
  console.log("message", message);
});

socket.on("disconnect", () => {
  if (socket.disconnected) {
    console.log("Socket-io server disconnected:(");
  }
});

setTimeout(() => {
  socket.emit("random", { message: "Send random message" });
}, 5000);
