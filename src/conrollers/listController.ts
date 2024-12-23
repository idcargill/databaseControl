import type { FastifyReply, FastifyRequest } from "fastify";
import { ManateeDataSource } from "../manateeDB";
import { POST, Controller } from "fastify-decorators";
import { Note } from '../manateeDB/entities/lists/notes';

@Controller("/list")
export default class ListController {
    @POST('/notes')
    async createNote(req: FastifyRequest, reply: FastifyReply) {
        console.log('creating note');
        console.log(req.body);

        const {userId, title, description} = req.body as Note;

        const note = new Note(userId, title, description);

        await ManateeDataSource.manager.save(note);
        return reply.send("note  saved");
    }
}