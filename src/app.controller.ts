import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SrtingToLowercasePipe } from './common/pipes/string-to-lowercase.pipe';
import { AuthGuard } from './common/guards/auth.guards';
import { UserAgent } from './common/decorators/user-agent.decorators';
import { ResponseInterseptor } from './common/interseptors/response.interseptor';
import { AllExeptionsFilter } from './common/filters/all-exeptions.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(SrtingToLowercasePipe)
  @Post()
  create(@Body('title') title: string) {
    return `movie ${title}`;
  }

  @UseGuards(AuthGuard)
  @UseFilters(AllExeptionsFilter)
  @Get('@me')
  getProfile(@UserAgent() userAgent: string) {
    return {
      id: 1,
      username: 'pokeuq',
      email: 'pokeuq@gmail.com',
      userAgent,
    };
  }
}
