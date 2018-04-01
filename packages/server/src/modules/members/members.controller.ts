import { Get, Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MembersService } from './members.service';
import { IMember } from 'models';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) { }

  @Post()
  async create(@Body() newMember: IMember) {
    return await this.membersService.create(newMember);
  }

  @Get()
  async retreiveAll() {
    return await this.membersService.retreiveAll();
  }

  @Put(':id')
  async update(@Param('id') memberId: string, @Body() newMember: IMember) {
    return await this.membersService.update(memberId, newMember);
  }

  @Delete(':id')
  async remove(@Param('id') memberId: string) {
    await this.membersService.remove(memberId);
  }
}
