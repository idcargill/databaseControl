import "reflect-metadata";
import app from "./fastifyApp";
import { UserController } from "./conrollers/userController";

const PORT = 3000;

const run = async () => {
  app.get("/", async () => {
    return { hello: "kittens" };
  });

  app.register((app) => {
    app.get("/users", UserController.getUsers);
    app.post("/users", UserController.updateOrCreateUser);
    app.get("/users/:id", UserController.getUserById);
  });

  try {
    console.log(`Starting server on port ${PORT}`);
    await app.listen({ host: "0.0.0.0", port: PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();
