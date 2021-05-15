import {getRepository } from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../model/User'

interface Userdata {
    name: string;
    email: string;
    password: string
}

class CreateUserservice {
    
    public async execute({name, email, password}:Userdata){

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository. findOne({email})
        
        if(checkUserExists){
            throw new Error('Email adrres alread exist');
        }
        
        const hashedPassoword = await hash(password, 8);

        const user = {
            name,
            email,
            password: hashedPassoword
        }

        await usersRepository.save(user);

        return User;


    }
}

export {CreateUserservice}