"use client";

import { PackageForm } from "@/components/PackageForm";
import { useRequests } from "@/components/RequestsProvider";
import { CardContainer } from "@/components/ui/CardContainer";
import { IRequest } from "@/types";
import { useRouter } from "next/navigation";
import * as uuid from "uuid";

export default function Page({
  params,
}: {
  params: { id: string; type: "delivery" | "order" };
}) {
  const requests = useRequests();
  const router = useRouter();

  const handleSubmit = (data: IRequest) => {
    requests.add({
      ...data,
      userId: params.id,
      orderType: params.type,
      id: uuid.v4(),
      createdAt: new Date().toJSON(),
    });

    router.push(`/${params.id}/requests`);
  };

  return (
    <CardContainer title={`Request ${params.type}`}>
      <PackageForm orderType={params.type} onSubmit={handleSubmit} />
    </CardContainer>
  );
}
