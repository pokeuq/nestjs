import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) { }
  async findAll() {
    return await this.prismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        actors: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: { id },
      include: {
        actors: true,
        poster: true,
        reviews: true,
      },
    });
    if (!movie || !movie.isAvailable) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }
  async create(dto: CreateMovieDto): Promise<Movie> {
    const { title, releaseYear, imageUrl, actorsId } = dto;
    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorsId },
      },
    });
    if (!actors || !actors.length)
      throw new NotFoundException('Один или несколько актеров не найдены');

    const movie = this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
            create: {
              url: imageUrl,
            },
          }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });
    return movie;
  }

  async update(id: string, dto: CreateMovieDto): Promise<boolean> {
    const movie = await this.findById(id);
    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: dto.actorsId },
      },
    });
    if (!actors || !actors.length)
      throw new NotFoundException('Один или несколько актеров не найдены');

    await this.prismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: {
        title: dto.title,
        releaseYear: dto.releaseYear,
        poster: dto.imageUrl
          ? {
            create: {
              url: dto.imageUrl,
            },
          }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return true;
  }

  // async updateIsAvailable(id: string, isAvailable: boolean): Promise<boolean> {
  //   const movie = await this.findById(id);
  //   movie.isAvailable = isAvailable;
  //   await this.movieRepository.save(movie);
  //   return true;
  // }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.prismaService.movie.delete({
      where: {
        id,
      },
    });

    return movie.id;
  }
}
