import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';

@Module({
  imports: [typeormModule.forFeature([Developer])],
  controllers: [DevelopersController],
  providers: [DevelopersService],
})
export class DevelopersModule {}
