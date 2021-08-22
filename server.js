const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("User connected :D");

  //Using
  socket.on("random", (message) => {
    socket.broadcast.emit("random", message);
  });

  // Using .send
  socket.on("message", (message) => {
    console.log("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected :(");
  });
});

server.listen({ port: 3000, server: "0.0.0.0.0" }, () => {
  console.log("Server is listenning in 0.0.0.0:3000");
});
