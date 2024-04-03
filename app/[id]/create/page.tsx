"use client";

import { CardContainer } from "@/components/ui/CardContainer";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleRoute = (type: "order" | "delivery") => () =>
    router.push(`create/${type}`);

  return (
    <>
      <CardContainer title="Create request">
        <footer className="flex justify-between">
          <Button onClick={handleRoute("order")}>Order</Button>
          <Button onClick={handleRoute("delivery")}>Delivery</Button>
        </footer>
      </CardContainer>
    </>
  );
}
