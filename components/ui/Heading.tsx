"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { FC } from "react";

export const Heading: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();

  return (
    <header className="flex gap-3 items-center my-4">
      <Button
        isIconOnly
        color="default"
        aria-label="Like"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 7l-5 5 5 5"
          ></path>
        </svg>
      </Button>
      <h1>{children}</h1>
    </header>
  );
};
