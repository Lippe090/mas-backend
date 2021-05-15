import {Router, request, response, Response} from 'express';
import {UserController} from './controller/UserController';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const userController = new UserController()

const routes = Router();

routes.post('/user', userController.create);
routes.post('activy', () => console.log('Activy route'));
routes.post('/courseuuit',()=> console.log('Course Unit route'));

export default routes;