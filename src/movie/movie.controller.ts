import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    return this.movieService.create(createMovieDto);
  }
}
