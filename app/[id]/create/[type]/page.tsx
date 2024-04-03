import { PackageForm } from "@/components/PackageForm";
// import { Heading } from "@radix-ui/themes";

export default function Page({
  params,
}: {
  params: { id: string; type: "delivery" | "order" };
}) {
  return (
    <div>
      <h1>Creating {params.type}</h1>
      <PackageForm orderType={params.type} />
    </div>
  );
}
