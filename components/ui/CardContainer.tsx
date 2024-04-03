import { Heading } from "@/components/ui/Heading";
import { Card, CardBody } from "@nextui-org/react";
import { FC } from "react";

export const CardContainer: FC<{
  title?: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <section>
      {title && <Heading>{title}</Heading>}
      <Card className="w-96">
        <CardBody>{children}</CardBody>
      </Card>
    </section>
  );
};
