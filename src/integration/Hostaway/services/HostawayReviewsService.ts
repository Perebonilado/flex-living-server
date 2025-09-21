import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axiosInstance from '../config/hostaway-axios';
import { AxiosResponse } from 'axios';
import { HostawayReviewResponse } from '../models/ReviewsModel';

@Injectable()
export class HostawayReviewsService {
  constructor() {}

  private readonly axios = axiosInstance;

  public async getReviews() {
    try {
      const response = await this.axios.get<
        AxiosResponse<HostawayReviewResponse, any>
      >('/api/reviews/hostaway');
      return response.data;
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Failed to get reviews',
        error?.status ?? HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async getReviewById(id: number) {
    try {
      const response = await this.axios.get<
        AxiosResponse<HostawayReviewResponse, any>
      >(`/api/reviews/hostaway`);
      return response.data.data.result.filter((d) => d.id === id);
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Failed to get reviews by id ' + id,
        error?.status ?? HttpStatus.BAD_REQUEST,
      );
    }
  }
}
