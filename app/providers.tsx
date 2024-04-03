"use client";

import { RequestsProvider } from "@/components/RequestsProvider";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <RequestsProvider>{children}</RequestsProvider>
    </NextUIProvider>
  );
}
