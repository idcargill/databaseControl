import { DataSource } from "typeorm";
import config from "../../../configs";

export const ManateeDataSource = new DataSource({
  type: 'postgres',
  host:config.manateeDb.baseUrl,
  port: config.manateeDb.port,
  username: config.manateeDb.userName,
  password: config.manateeDb.password,
  database: config.manateeDb.databaseName,
  schema: 'manatee_db', // ?
  entities: [__dirname + "/entities/*.ts", __dirname + "/entities/*/*.js"],
  synchronize: true,
});

ManateeDataSource.initialize()
  .then(() => {
    console.log("User Data Source has been initialized!");
  })
  .catch((err) => {
    console.log(config.manateeDb)
    console.error("Error during Data Source initialization", err);
  });
