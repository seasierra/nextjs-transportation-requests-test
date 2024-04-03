"use client";

// app/page.tsx
import { CardContainer } from "@/components/ui/CardContainer";
import { Button } from "@nextui-org/button";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
// "john", "mary", "keith", "benedict", "julius"
const users = [
  {
    id: "john",
    name: "John",
  },
  {
    id: "mary",
    name: "Mary",
  },
  {
    id: "keith",
    name: "Keith",
  },
  {
    id: "benedict",
    name: "Benedict",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-3">
      <h1>Select user's requests</h1>
      <CardContainer>
        <Listbox
          items={users}
          aria-label="Dynamic Actions"
          onAction={(id) => router.push(`/${id}/requests`)}
        >
          {(user) => <ListboxItem key={user.id}>{user.name}</ListboxItem>}
        </Listbox>
      </CardContainer>
      <span>OR</span>
      <Button>See all requests</Button>
    </main>
  );
}
