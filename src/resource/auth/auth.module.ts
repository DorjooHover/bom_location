import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}