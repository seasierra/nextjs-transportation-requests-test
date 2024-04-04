"use client";

import { useRequests } from "@/components/RequestsProvider";
import { Heading } from "@/components/ui/Heading";
import { RequestsTable } from "@/components/RequestsTable/RequestsTable";

export default function Page() {
  const requests = useRequests();

  return (
    <main className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Heading routeTo="/">All requests</Heading>
      </div>
      <RequestsTable list={requests.list} />
    </main>
  );
}
