import { Module, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProxyMiddleware } from './middleware/proxy.middleware'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProxyMiddleware)
      .forRoutes('api')
  }
}
