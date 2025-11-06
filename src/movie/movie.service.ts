import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: { isAvailable: true },
      order: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: { id },
    });

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }

  async create(createMovieDto: MovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(createMovieDto);
    return await this.movieRepository.save(movie);
  }

  async update(id: string, updateMovieDto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, updateMovieDto);
    await this.movieRepository.save(movie);
    return true;
  }

  async updateIsAvailable(id: string, isAvailable: boolean): Promise<boolean> {
    const movie = await this.findById(id);
    movie.isAvailable = isAvailable;
    await this.movieRepository.save(movie);
    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);
    await this.movieRepository.remove(movie);
    return movie.id;
  }
}
