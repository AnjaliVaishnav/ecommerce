import { Injectable } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user-login.dto';
import { UpdateUserLoginDto } from './dto/update-user-login.dto';
import * as bcrypt from 'bcrypt'
import { User, userDocument } from 'src/shared/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserLoginService {

  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) { }

  async hashPassword(password: string) {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
  }

  async comparePassword(password: string, hash) {
    return await bcrypt.compare(password, hash)
  }

  async getUserByName(username: string){
    return this.userModel.findOne({username}).exec();
  }
  create(createUserLoginDto: CreateUserLoginDto) {
    return 'This action adds a new userLogin';
  }

  findAll() {
    return `This action returns all userLogin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLogin`;
  }

  update(id: number, updateUserLoginDto: UpdateUserLoginDto) {
    return `This action updates a #${id} userLogin`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLogin`;
  }
}
