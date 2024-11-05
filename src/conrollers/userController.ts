import type { FastifyReply, FastifyRequest } from "fastify";
import { UserDataSouce } from "../datasources/userDataSource";
import { User } from "../entities/User";
import { Get, Post } from "routing-controllers";

export class UserController {
  @Get("/users")
  static async getUsers() {
    const users = await UserDataSouce.manager.findAndCount(User);
    return users;
  }

  @Get("/users/:id")
  static async getUserById(
    req: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply,
  ) {
    const id = req.params.id;
    const user = await UserDataSouce.manager.findOneBy(User, { id });
    reply.send(user);
    return user;
  }

  @Post("/users")
  static async updateOrCreateUser(req: FastifyRequest, reply: FastifyReply) {
    if (!req.body) {
      throw new Error("Request body is empty");
    }
    const payload: Pick<User, "firstName" | "lastName" | "email"> =
      req.body as User;

    const newUser = new User(
      payload.firstName,
      payload.lastName,
      payload.email,
    );

    await UserDataSouce.manager.save(newUser);
    reply.send("New user created");
  }
}
