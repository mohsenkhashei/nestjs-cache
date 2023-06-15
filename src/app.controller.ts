import { Controller, Get, CacheTTL, CacheKey } from '@nestjs/common';
import { AppService } from './app.service';
// import { ,  } from '@nestjs/cache-manager';

// import { CacheInterceptor } from '@nestjs/cache-manager';
// @UseInterceptors(CacheInterceptor)  using for this controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('some_route')
  @CacheTTL(30)
  async getHello() {
    return this.appService.getHello();
  }
}
