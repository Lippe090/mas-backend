import {Request, Response} from 'express';
import {CreateUserservice} from '../services/CreateUserService';

class UserController {
    async create(request:Request, response:Response) {
        const userdata = request.body
        
        const createUser = new CreateUserservice()

        const user = await createUser.execute(userdata);

        return response.json(user);
    }
}

export {UserController};