import React from "react";
import Image from "next/image";
import {TDeliveryDetails} from "@repo/types/types";
import FreeGiftSticker from "@components/FreeGiftSticker";
import Card from "@components/Card";
import Button from "@components/Button";

export default function NextDelivery({
  title,
  message,
  totalPrice,
  freeGift,
}: TDeliveryDetails) {
  return (
    <Card>
      <div className={`flex relative sm:min-w-[800px]`}>
        {freeGift && <FreeGiftSticker />}

        <div className="absolute bg-gray-100 items-center left-1/2 border sm:translate-x-0 sm:translate-y-0 -translate-x-1/2 border-kk-light-gray -translate-y-1/2 sm:static w-[60px] sm:w-auto sm:h-auto flex h-[60px] sm:rounded-[0px] rounded-full overflow-hidden">
          <Image
            src="/images/cat.png"
            alt="Cat striking a candid pose"
            className="object-cover scale-150 sm:scale-100"
            width={320 * 1.3} // Roughly scale to match design
            height={230 * 1.3}
          />
        </div>

        {/* Delivery info */}
        <div className={"px-[24px] sm:text-left text-center gap-[30px] flex flex-col justify-between py-[40px]"}>
          <div className={`flex flex-col sm:max-w-[400px] gap-[10px]`}>
          <p className={`text-[16px] text-kk-green font-semibold`}>{title}</p>
            <p className={`text-[12px] text-kk-dark-gray sm:w-4/5`}>{message}</p>
            <p className={`text-[13px] font-semibold`}>
              Total Price: £{totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Further actions */}
          <div className={"flex gap-3 w-full"}>
            <Button variant={"secondary"} type={"button"} grow>
              SEE DETAILS
            </Button>
            <Button variant={"primary"} type={"button"} grow>
              EDIT DELIVERY
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
