import { Test, TestingModule } from '@nestjs/testing';
import { CommsController } from './comms.controller';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import {TDeliveryDetails} from "@repo/types/types";

jest.mock('../data.json', () => [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    firstName: 'John',
    cats: [
      { name: 'Fluffy', subscriptionActive: true, pouchSize: 'B' },
      { name: 'Whiskers', subscriptionActive: false, pouchSize: 'C' },
    ],
  },
  {
    id: '660e8400-e29b-41d4-a716-446655440111',
    firstName: 'Jane',
    cats: [],
  },
]);

describe('CommsController', () => {
  let controller: CommsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommsController],
    }).compile();

    controller = module.get<CommsController>(CommsController);
  });

  it('should return delivery details for a valid user with active subscriptions', () => {
    const response = controller.getNextDelivery('550e8400-e29b-41d4-a716-446655440000');

    expect(response).toEqual<TDeliveryDetails>({
      title: 'Your next delivery for Fluffy',
      message: "Hey John, in two days time, we'll be charging you for your next order for Fluffy's fresh food.",
      totalPrice: 59.5,
      freeGift: false,
    });
  });

  it('should throw NotFoundException if the user is not found', () => {
    expect(() =>
      controller.getNextDelivery('123e4567-e89b-12d3-a456-426614174000'),
    ).toThrow(NotFoundException);
  });

  it('should throw NotFoundException if the user has no active subscriptions', () => {
    expect(() =>
      controller.getNextDelivery('660e8400-e29b-41d4-a716-446655440111'),
    ).toThrow(NotFoundException);
  });

  it('should throw BadRequestException if the user ID is invalid', () => {
    expect(() => controller.getNextDelivery('invalid-uuid')).toThrow(BadRequestException);
  });
});
