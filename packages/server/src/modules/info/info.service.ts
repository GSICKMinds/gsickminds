import { Component } from '@nestjs/common';
import { InfoSchema } from './info.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Info, IInfo } from 'models';
import { Model } from 'mongoose';

@Component()
export class InfoService {
  constructor(@InjectModel(InfoSchema) private readonly infoModel: Model<Info>) { }

  async retreive() {
    return await this.infoModel.findOne();
  }

  async update(id: string, info: IInfo) {
    return await this.infoModel.findByIdAndUpdate(id, info, { upsert: true, new: true });
  }

}
