import { PackageForm } from "@/components/PackageForm";
import { CardContainer } from "@/components/ui/CardContainer";
import { Heading } from "@/components/ui/Heading";
import { Card, CardBody } from "@nextui-org/react";
// import { Heading } from "@radix-ui/themes";

export default function Page({
  params,
}: {
  params: { id: string; type: "delivery" | "order" };
}) {
  return (
    <CardContainer title={`Request ${params.type}`}>
      <PackageForm userId={params.id} orderType={params.type} />
    </CardContainer>
  );
}
