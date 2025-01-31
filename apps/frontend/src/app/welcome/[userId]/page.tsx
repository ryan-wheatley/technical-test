import { notFound } from "next/navigation";
import { getDeliveryData } from "@/actions/getDeliveryData";
import NextDelivery from "@components/NextDelivery";

export default async function WelcomePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const data = await getDeliveryData(userId);

  if (!data) {
    // Also fallback to 404 if the user is not found,
    // or has no active subscriptions.
    return notFound();
  }

  return (
    <NextDelivery
      title={data.title}
      message={data.message}
      totalPrice={data.totalPrice}
      freeGift={data.freeGift}
    />
  );
}
