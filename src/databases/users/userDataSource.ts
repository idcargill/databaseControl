import { DataSource } from "typeorm";

export const UserDataSouce = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "mariadb",
  password: "password",
  database: "dahliaDb",
  entities: [__dirname + "/entities/*.ts"],
  synchronize: true,
});

UserDataSouce.initialize()
  .then(() => {
    console.log("User Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
