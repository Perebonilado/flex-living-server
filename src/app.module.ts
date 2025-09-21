import { Module } from '@nestjs/common';
import { IntegrationModule } from './integration/IntegrationModule';
import { ControllerModule } from './controllers/ControllerModule';
import { ServicesModule } from './services/ServicesModule';

@Module({
  imports: [IntegrationModule, ControllerModule, ServicesModule],
})
export class AppModule {}
