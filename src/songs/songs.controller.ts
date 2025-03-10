import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song.dto';

@Controller('songs')
export class SongsController {
    constructor(private songServices: SongsService) {}
    
    @Post()
    create(@Body() CreateSongDTO: CreateSongDTO) {
        return this.songServices.create(CreateSongDTO);
    }

    @Get()
    findAll() {
        return this.songServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.songServices.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createSongDTO: CreateSongDTO) {
        return this.songServices.updateOne(id, createSongDTO);
    }

    @Delete('id')
    delete(@Param('id') id: number) {
        return this.songServices.delete(id);
    }
}
