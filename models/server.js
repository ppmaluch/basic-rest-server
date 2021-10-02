const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    //   Public directory
    this.app.use(express.static("public"));
    // CORS
    this.app.use(cors());
    // Read and Parse request body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
