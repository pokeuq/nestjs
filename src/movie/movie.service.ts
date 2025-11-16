import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  // constructor(
  //   @InjectRepository(MovieEntity)
  //   private readonly movieRepository: Repository<MovieEntity>,
  //   @InjectRepository(ActorEntity)
  //   private readonly actorRepository: Repository<ActorEntity>,
  //   @InjectRepository(MoviePosterEntity)
  //   private readonly posterRepository: Repository<MoviePosterEntity>,
  // ) {}
  // async findAll(): Promise<MovieEntity[]> {
  //   return await this.movieRepository.find({
  //     where: { isAvailable: true },
  //     order: {
  //       createdAt: 'desc',
  //     },
  //   });
  // }
  // async findById(id: string): Promise<MovieEntity> {
  //   const movie = await this.movieRepository.findOne({
  //     where: { id },
  //     relations: ['actors'],
  //   });
  //   if (!movie) {
  //     throw new NotFoundException('Movie not found');
  //   }
  //   return movie;
  // }
  // async create(dto: CreateMovieDto): Promise<MovieEntity> {
  //   const { title, releaseYear, imageUrl, actorsId } = dto;
  //   const actors = await this.actorRepository.find({
  //     where: {
  //       id: In(actorsId),
  //     },
  //   });
  //   if (!actors || !actors.length)
  //     throw new NotFoundException('Один или несколько актеров не найдены');
  //   let poster: MoviePosterEntity | null = null;
  //   if (imageUrl) {
  //     poster = this.posterRepository.create({
  //       url: imageUrl,
  //     });
  //     await this.posterRepository.save(poster);
  //   }
  //   const movie = this.movieRepository.create({
  //     title,
  //     releaseYear,
  //     poster,
  //     actors,
  //   });
  //   return await this.movieRepository.save(movie);
  // }
  // async update(id: string, updateMovieDto: CreateMovieDto): Promise<boolean> {
  //   const movie = await this.findById(id);
  //   Object.assign(movie, updateMovieDto);
  //   await this.movieRepository.save(movie);
  //   return true;
  // }
  // async updateIsAvailable(id: string, isAvailable: boolean): Promise<boolean> {
  //   const movie = await this.findById(id);
  //   movie.isAvailable = isAvailable;
  //   await this.movieRepository.save(movie);
  //   return true;
  // }
  // async delete(id: string): Promise<string> {
  //   const movie = await this.findById(id);
  //   await this.movieRepository.remove(movie);
  //   return movie.id;
  // }
}
