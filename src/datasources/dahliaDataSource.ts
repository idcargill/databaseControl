import { DataSource } from "typeorm";

export const DahliaDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "dahlia",
  entities: ["../entities/*.ts"],
  synchronize: true,
});

DahliaDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
