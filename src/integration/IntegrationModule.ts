import { Module } from '@nestjs/common';
import { HostawayModule } from './Hostaway/HostawayModule';

@Module({
  imports: [HostawayModule],
  exports: [HostawayModule],
})
export class IntegrationModule {}
