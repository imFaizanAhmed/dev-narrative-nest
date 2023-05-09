import { Injectable } from '@nestjs/common';
import { CreateUserGraphqlInput } from './dto/create-user-graphql.input';
import { UpdateUserGraphqlInput } from './dto/update-user-graphql.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/users.schema';

@Injectable()
export class UserGraphqlService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  create(createUserGraphqlInput: CreateUserGraphqlInput) {
    return 'This action adds a new userGraphql';
  }

  findAll() {
    return `This action returns all userGraphql`;
  }

  findOne(email, password) {
    return this.userModel.findOne({ email, password });
  }

  async signin({ firstName, lastName, email, password }) {
    try {
      await this.userModel.create({ firstName, lastName, email, password });
      return true;
    } catch (e) {
      return false;
    }
  }

  update(id: number, updateUserGraphqlInput: UpdateUserGraphqlInput) {
    return `This action updates a #${id} userGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGraphql`;
  }
}
