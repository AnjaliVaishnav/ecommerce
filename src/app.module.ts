import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLoginModule } from './user-login/user-login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    UserLoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
