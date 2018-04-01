import { Component } from '@nestjs/common';
import { Member, IMember } from 'models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberSchema } from './members.schema';

@Component()
export class MembersService {
  constructor(@InjectModel(MemberSchema) private readonly memberModel: Model<Member>) { }

  async create(newMember: IMember) {
    return await this.memberModel.create(newMember);
  }

  async retreiveAll() {
    return await this.memberModel.find();
  }

  async update(memberId: string, newMember: IMember) {
    return await this.memberModel.findByIdAndUpdate(memberId, newMember, { new: true });
  }

  async remove(memberId: string) {
    return await this.memberModel.findByIdAndRemove(memberId);
  }
}
