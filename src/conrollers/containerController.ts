import type { FastifyReply, FastifyRequest } from "fastify";
import { ManateeDataSource } from "../manateeDB";
import { POST, Controller } from "fastify-decorators";
import { Container } from '../manateeDB/entities/storage/container';


// TODO this is a placeholder for now
@Controller("/containers")
export default class ContainerController {
    // @GET("/user/:userId")
    // // async getUserContainers(req: FastifyRequest, reply: FastifyReply) {
    // static async getAllUserContainers(
    //     req: FastifyRequest<{ Params: { userId: number } }>,
    // ) {
    //     const userId = req.params.userId;
    //     const containers = await ContainerDataSource.manager.find(Container, {where: {userId: userId}});
    //     return containers;
    // }

    // @GET("/:id")
    //  static async getContainerById(
    //     req: FastifyRequest<{ Params: { id: number } }>,
    //     reply: FastifyReply,
    // ) {
    //     const containerId = req.params.id;
    //     const container = await ContainerDataSource.manager.findOneBy(Container, { containerId });
    //     return reply.send(container);
    // }

    @POST()
    async createContainer(req: FastifyRequest, reply: FastifyReply) {
        const container = new Container(1, 1, true, "test", "test");
        await ManateeDataSource.manager.save(container);
        return reply.send("create container");
    }
}


// TODO: create container

// TODO: update container
// TODO: move container parent

// TODO: delete container