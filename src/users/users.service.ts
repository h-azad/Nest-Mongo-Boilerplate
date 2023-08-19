import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(userData): Promise<User> {
        
        return this.userModel.create({ name: userData.name, email: userData.email, password: userData.password });
    }
    async getUser(query: object): Promise<User> {
        return this.userModel.findOne(query);
    }
}