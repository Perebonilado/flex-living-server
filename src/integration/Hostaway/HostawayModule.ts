import { Module } from '@nestjs/common';
import { HostawayReviewsService } from './services/HostawayReviewsService';

@Module({
  providers: [HostawayReviewsService],
  exports: [HostawayReviewsService],
})
export class HostawayModule {}
