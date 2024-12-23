import { DataSource } from "typeorm";
import config from "../../configs";

export const ManateeDataSource = new DataSource({
  type: 'postgres',
  host:config.manateeDb.baseUrl,
  port: config.manateeDb.port,
  username: config.manateeDb.userName,
  password: config.manateeDb.password,
  database: config.manateeDb.databaseName,
  schema: config.manateeDb.manateeSchemaName,
  logging: false,
  entities: [__dirname + "/entities/*.ts", __dirname + "/entities/*/*.ts"],
  synchronize: true,
});


ManateeDataSource.initialize()
  .then(() => {
    console.log("manatee_db data Source has been initialized!");
    ManateeDataSource.query('CREATE SCHEMA IF NOT EXISTS manatee_db;');
  })
  .catch((err) => {
    console.log(config.manateeDb)
    console.error("Error during Data Source initialization", err);
  });
