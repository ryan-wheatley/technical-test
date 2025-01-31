import React from "react";

type TCard = { children: React.ReactNode };

export default function Card({ children }: TCard) {
  return (
    <div
      className={`border shadow bg-white flex border-kk-light-gray rounded-[4px]`}
    >
      {children}
    </div>
  );
}
