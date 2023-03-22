import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
