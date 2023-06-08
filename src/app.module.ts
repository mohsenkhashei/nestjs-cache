import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      // ttl: 60, last for
      // max: 1000, items before cache empties
      isGlobal: true,
    }),
  ],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR, // caching whole module
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
