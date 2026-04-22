import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'João' },
      { id: 2, name: 'Maria' }
    ];
  }

  @Post()
  create(@Body() body: { name?: string }) {
    return {
      id: Date.now(),
      name: body?.name ?? 'Novo usuário',
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name?: string }) {
    return {
      id: Number(id),
      name: body?.name ?? 'Usuário atualizado',
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      deleted: true,
      id: Number(id),
    };
  }
}