import "dotenv/config";
import "reflect-metadata";
import { fastifyInstance as app} from "./server/fastifyInstance";
import UserController from "./conrollers/userController";
import ContainerController from "./conrollers/containerController";
import ListController from "./conrollers/listController";
import { bootstrap } from "fastify-decorators";
import config from "../configs";


const PORT = config.server.port;

const run = async () => {

  try {
    app.register(bootstrap, {
      autoLoadEntities: true,
      controllers: [ContainerController,UserController, ListController],
    }); 
  } catch (err) {
    console.log(err);
  }

  try {
    console.log(`Starting server on port ${PORT}`);
    await app.listen({ host: "0.0.0.0", port: PORT });
    console.log(app.printRoutes());
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  
  run();
  