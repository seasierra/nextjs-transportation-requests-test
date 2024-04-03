import { PackageForm } from "@/components/PackageForm";
import { Heading } from "@/components/ui/Heading";
import { Card, CardBody } from "@nextui-org/react";
// import { Heading } from "@radix-ui/themes";

export default function Page({
  params,
}: {
  params: { id: string; type: "delivery" | "order" };
}) {
  return (
    <div>
      <Heading>Create {params.type}</Heading>
      <Card className="w-96">
        <CardBody>
          <PackageForm orderType={params.type} />
        </CardBody>
      </Card>
    </div>
  );
}
