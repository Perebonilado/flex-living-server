import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { HostawayReviewsService } from 'src/integration/Hostaway/services/HostawayReviewsService';

@Controller('hostaway')
export class HostawayController {
  constructor(
    @Inject(HostawayReviewsService)
    private readonly hostawayReviewsService: HostawayReviewsService,
  ) {}

  @Get()
  public async getHostawayReviews() {
    return await this.hostawayReviewsService.getReviews();
  }

  @Get('/:id')
  public async getHostawayReviewById(@Param('id', ParseIntPipe) id: number) {
    return await this.hostawayReviewsService.getReviewById(id);
  }
}
