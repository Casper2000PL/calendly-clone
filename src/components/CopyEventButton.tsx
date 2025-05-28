"use client";

import { VariantProps } from "class-variance-authority";
import { Copy, CopyCheck, CopyX } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface CopyEventButtonProps {
  eventId: string;
  clerkUserId: string;
}

type CopyState = "idle" | "copied" | "error";

const CopyEventButton = ({ eventId, clerkUserId }: CopyEventButtonProps) => {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const CopyIcon = getCopyIcon(copyState);

  return (
    <Button
      variant="outline"
      onClick={() => {
        navigator.clipboard
          .writeText(`${location.origin}/book/${clerkUserId}/${eventId}`)
          .then(() => {
            setCopyState("copied");
            setTimeout(() => {
              setCopyState("idle");
            }, 2000);
          })
          .catch(() => {
            setCopyState("error");
            setTimeout(() => {
              setCopyState("idle");
            }, 2000);
          });
      }}
    >
      <CopyIcon className="size-4 mr-2" />
      {getChildren(copyState)}
    </Button>
  );
};

export default CopyEventButton;

function getCopyIcon(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return Copy;
    case "copied":
      return CopyCheck;
    case "error":
      return CopyX;
  }
}

function getChildren(copyState: CopyState) {
  switch (copyState) {
    case "idle":
      return "Copy Link";
    case "copied":
      return "Copied!";
    case "error":
      return "Error";
  }
}
