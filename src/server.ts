import "dotenv/config";
import "reflect-metadata";
import app from "./fastifyInstance";
import UserController from "./conrollers/userController";
import ContainerController from "./conrollers/containerController";

import { bootstrap } from "fastify-decorators";
const PORT = 3000;

const run = async () => {

  app.register(bootstrap, {
    controllers: [ContainerController,UserController],
  }); 

  try {
    console.log(`Starting server on port ${PORT}`);
    await app.listen({ host: "0.0.0.0", port: PORT });
    console.log('Routes: ', app.printRoutes());
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  
  run();
  
  // fastifyInsance.get("/", async () => {
  //   return { hello: "kittens" };
  // });

  // fastifyInsance.register((fastifyInsance) => {
  //   fastifyInsance.get("/users", UserController.getUsers);
  //   fastifyInsance.post("/users", UserController.updateOrCreateUser);
  //   fastifyInsance.get("/users/:id", UserController.getUserById);


  //   fastifyInsance.get("/stuff/containers/:userId", ContainerController.getAllUserContainers);
  //   fastifyInsance.get("/stuff/containers/:containerId", ContainerController.getContainerById);
  // });