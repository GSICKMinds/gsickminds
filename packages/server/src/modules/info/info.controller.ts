import { Get, Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InfoService } from './info.service';
import { IInfo } from 'models';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) { }

  @Get()
  async retreive() {
    return await this.infoService.retreive();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() info: IInfo) {
    const infoNew = await this.infoService.update(id, info);
    return infoNew;
  }
}
