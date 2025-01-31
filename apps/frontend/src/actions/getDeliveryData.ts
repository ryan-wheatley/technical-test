"use server";

import { TDeliveryDetails } from "@repo/types/types";

export async function getDeliveryData(userId: string) {
  const res = await fetch(
    `${process.env.API_URL}/comms/your-next-delivery/${userId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json() as Promise<TDeliveryDetails>;
}
