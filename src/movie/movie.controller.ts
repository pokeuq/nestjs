import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createMovieDto: CreateMovieDto) {
    return this.movieService.update(id, createMovieDto);
  }

  // @Patch(':id')
  // updateIsAvailable(
  //   @Param('id') id: string,
  //   @Body('isAvailable') isAvailable: boolean,
  // ) {
  //   return this.movieService.updateIsAvailable(id, isAvailable);
  // }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
