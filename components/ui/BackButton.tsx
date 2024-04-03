import { Button } from "@nextui-org/react";

export const BackButton = () => (
  <Button isIconOnly color="danger" aria-label="Like">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 7l-5 5 5 5"
      ></path>
    </svg>
  </Button>
);
