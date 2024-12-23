import type { FastifyReply, FastifyRequest } from "fastify";
import { ManateeDataSource } from "../manateeDB";
import { POST, Controller } from "fastify-decorators";
import { ToDo } from "../manateeDB/entities/lists/toDo";

@Controller("/todo")
export default class TodoController {
    @POST('/')
    async createToDo(req: FastifyRequest, reply: FastifyReply) {
        console.log('creating toDo');
        console.log(req.body);
        const { userId, title, description } = req.body as ToDo;
        
        const toDo = new ToDo(userId, title, description, false);

        try {
            await ManateeDataSource.manager.save(toDo);
            return reply.send("toDo saved");
        } catch (error) {
            console.error(error);
            return reply.status(500).send("Error saving ToDo - server error");
        }
    }
}