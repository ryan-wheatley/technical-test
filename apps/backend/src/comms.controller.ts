import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { z } from 'zod';
import data from '../data.json';
import { TDeliveryDetails } from "@repo/types/types";

const uuidSchema = z.string().uuid();

const pouchSizePrices: Record<string, number> = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66.0,
  E: 69.0,
  F: 71.25,
};

const FREE_GIFT_MINIMUM = 120;

@Controller('comms')
export class CommsController {
  @Get('your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string) {
    const validationResult = uuidSchema.safeParse(userId);
    if (!validationResult.success) {
      throw new BadRequestException('Invalid user ID format');
    }

    const user = data.find((user) => user.id === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const subscribedCats = user.cats.filter((cat) => cat.subscriptionActive);
    if (subscribedCats.length === 0) {
      throw new NotFoundException('User has no active subscriptions');
    }

    const catNames = subscribedCats.map((cat) => cat.name);
    const formattedCatNames =
      catNames.length > 1
        ? `${catNames.slice(0, -1).join(', ')} and ${catNames.slice(-1)}`
        : catNames[0];

    const title = `Your next delivery for ${formattedCatNames}`;
    const message = `Hey ${user.firstName}, in two days time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`;
    const totalPrice = subscribedCats.reduce(
      (acc, cat) => acc + pouchSizePrices[cat.pouchSize],
      0,
    );

    const freeGift = totalPrice > FREE_GIFT_MINIMUM;

    const deliveryData: TDeliveryDetails = {
      title,
      message,
      totalPrice,
      freeGift
    }

    return deliveryData
  }
}
