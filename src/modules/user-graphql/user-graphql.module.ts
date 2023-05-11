import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserGraphqlService } from './user-graphql.service';
import { UserGraphqlResolver } from './user-graphql.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users.schema';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserGraphqlResolver, UserGraphqlService],
})
export class UserGraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('graphql');
  }
}
