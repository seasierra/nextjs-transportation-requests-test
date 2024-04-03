"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleRoute = (type: "order" | "delivery") => () =>
    router.push(`create/${type}`);

  return (
    <>
      <h1>Create Page</h1>
      <p>Select type</p>
      <Button onClick={handleRoute("order")}>Order</Button>
      <Button onClick={handleRoute("delivery")}>Delivery</Button>

      {params.id}
    </>
  );
}
