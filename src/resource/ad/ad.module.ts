import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ad,Filter, FilterSchema, AdSchema, Discrict, DiscrictSchema, Committee, CommitteeSchema, Location , LocationSchema, Town, TownSchema} from 'src/schema';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Ad.name, schema: AdSchema}, {name: Filter.name, schema: FilterSchema}, {name: Discrict.name, schema: DiscrictSchema}, {name: Location.name, schema: LocationSchema}, {name: Committee.name, schema: CommitteeSchema}, {name: Town.name, schema: TownSchema}])],
  controllers: [AdController],
  providers: [AdService]
})
export class AdModule {}
