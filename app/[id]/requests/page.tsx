"use client";

import { Button } from "@nextui-org/react";
import { useRequests } from "@/components/RequestsProvider";
import { Heading } from "@/components/ui/Heading";
import { useRouter } from "next/navigation";
import { RequestsTable } from "@/components/RequestsTable/RequestsTable";

export default function Page({ params }: { params: { id: string } }) {
  const requests = useRequests(params.id);
  const router = useRouter();

  return (
    <main className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Heading routeTo="/">{params.id}'s requests</Heading>
        <Button onClick={() => router.push(`/${params.id}/create`)}>Add</Button>
      </div>
      <RequestsTable list={requests.list} />
    </main>
  );
}
