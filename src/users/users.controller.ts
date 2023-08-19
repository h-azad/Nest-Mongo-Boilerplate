import { Body, Controller, Post, Get, Param, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';
import { MongoExceptionFilter } from 'src/lib/filters/mongo-exception.filter';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }


    @UseFilters(MongoExceptionFilter)
    @Post('/signup')
    async createUser(@Body() userDto: UserDto): Promise<User> {
        
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(userDto.password, saltOrRounds);
        userDto.password = hashedPassword
        const result = await this.usersService.createUser(userDto);
        return result;
    }
}