import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'movies', host: ['api.teacoder.ru', 'api.google.com'] })
export class MovieController {
  @Get()
  findAll() {
    return [
      {
        title: 'Fight Club',
      },
      {
        title: 'The Matrix',
      },
      {
        title: 'The Dark Knight',
      },
    ];
  }
}
