import { Group, Skeleton } from "@mantine/core";
import React from "react";

export default function HeaderSkeleton() {
  const buttonWidth = 70;
  const buttonHeight = 30;

  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Skeleton height={buttonHeight} width={100} />
      <Group>
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
      </Group>
      <Group>
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
      </Group>
    </Group>
  );
}
