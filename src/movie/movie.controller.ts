import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('movies')
export class MovieController {
  @Get()
  findAll(@Query() query: any) {
    return JSON.stringify(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }
  @Get(':id/:reviewId')
  findByManyId1(@Param() params: any) {
    return JSON.stringify(params);
  }

  @Post()
  create(@Body() body: any) {
    return JSON.stringify(body);
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return JSON.stringify(headers);
  }

  @Get('headers/user-agent')
  getUserAgentHeaders(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
    };
  }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(200).json({
      message: 'Hello World',
    });
  }
}
