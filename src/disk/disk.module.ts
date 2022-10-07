import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskController } from './disk.controller';
import { DiskService } from './disk.service';

@Module({
  imports:[PowerModule],
  providers: [DiskService],
  exports:[DiskService],
  controllers: [DiskController],
})
export class DiskModule {}
