import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ad, AdSchema} from 'src/schema';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Ad.name, schema: AdSchema}])],
  controllers: [AdController],
  providers: [AdService]
})
export class AdModule {}
