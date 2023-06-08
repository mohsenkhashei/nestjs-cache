import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheTTL, CacheKey } from '@nestjs/cache-manager';

// import { CacheInterceptor } from '@nestjs/cache-manager';
// @UseInterceptors(CacheInterceptor)  using for this controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('some_name')
  @CacheTTL(30)
  async getHello() {
    return this.appService.getHello();
  }
}
