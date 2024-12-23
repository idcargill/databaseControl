import type { FastifyReply, FastifyRequest } from "fastify";
import { ManateeDataSource } from "../manateeDB";
import User from "../manateeDB/entities/User";
import { GET, POST, Controller } from "fastify-decorators"

@Controller('/users')
export default class UserController {
  @GET()
  async getHandler() {
    console.log('getting users route');
    const users = await ManateeDataSource.manager.findAndCount(User);
    return users;
  }

  // @GET("/:id")
  // static async getUserById(
  //   req: FastifyRequest<{ Params: { id: number } }>,
  //   reply: FastifyReply,
  // ) {
  //   const id = req.params.id;
  //   const user = await UserDataSouce.manager.findOneBy(User, { id });
  //   reply.send(user);
  //   return user;
  // }

  @POST()
  async updateOrCreateUser(req: FastifyRequest, reply: FastifyReply) {
    if (!req.body) {
      throw new Error("Request body is empty");
    }
    const payload: Pick<User, "firstName" | "lastName" | "email"> =
      req.body as User;

    const newUser = new User(
      payload.firstName,
      payload.lastName ?? null,
      payload.email ?? null,
    );

    try {
      await ManateeDataSource.manager.save(newUser);
      // const repo = await UserDataSouce.getRepository(User);
      // console.log(repo);
      // await repo.save(newUser);
      reply.send("New user created");
    } catch (err) {
      console.log('Error creating a user')
      console.log(err);
      reply.send({ error: err });
    }
  }
}
