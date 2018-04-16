import { Get, Controller, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { IInfo, ISponsor } from 'models';
import { SponsorsService } from './sponsors.service';

@Controller('sponsors')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) { }
  @Get()
  async getAll(@Query('all') all: string) {
    const allBoolean = all === 'true';
    return this.sponsorsService.getAll(allBoolean);
  }
  @Post()
  async create(@Body() sponsor: ISponsor) {
    return this.sponsorsService.create(sponsor);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() sponsor: ISponsor) {
    return await this.sponsorsService.update(id, sponsor);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.sponsorsService.delete(id);
  }
}
