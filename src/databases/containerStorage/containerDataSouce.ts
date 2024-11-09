import { DataSource } from "typeorm";

export const ContainerDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3308,
  username: "containers",
  password: "password",
  database: "containers",
  entities: [__dirname + "/entities/*.ts"],
  synchronize: true,
});

ContainerDataSource.initialize()
  .then(() => {
    console.log("Container Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Container Data Source initialization", err);
  });
