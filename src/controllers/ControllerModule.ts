import { Module } from '@nestjs/common';
import { IntegrationModule } from 'src/integration/IntegrationModule';
import { HostawayController } from './HostawayController';

@Module({
  imports: [IntegrationModule],
  controllers: [HostawayController]
})
export class ControllerModule {}
