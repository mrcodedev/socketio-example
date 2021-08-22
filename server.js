const server = require("http").createServer();
const io = require("socket.io")(server);

// When user is connected to server
io.on("connection", (socket) => {
  console.log("User connected :D");

  //Using name event
  socket.on("random", (message) => {
    socket.broadcast.emit("random", message);
  });

  // Using default event "message"
  socket.on("message", (message) => {
    console.log("message", message);
  });

  // When client is disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected :(");
  });
});

// Starting Server
server.listen({ port: 3000, server: "0.0.0.0.0" }, () => {
  console.log("Server is listenning in 0.0.0.0:3000");
});
