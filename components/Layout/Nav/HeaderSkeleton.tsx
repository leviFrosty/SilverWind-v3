import { Group, Skeleton } from "@mantine/core";
import React from "react";

interface Props {
  isSmallScreen: boolean;
}

export default function HeaderSkeleton({ isSmallScreen }: Props) {
  const buttonWidth = 70;
  const buttonHeight = 30;

  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Skeleton height={buttonHeight} width={100} />
      {!isSmallScreen && (
        <Group>
          <Skeleton height={buttonHeight} width={buttonWidth} />
          <Skeleton height={buttonHeight} width={buttonWidth} />
          <Skeleton height={buttonHeight} width={buttonWidth} />
          <Skeleton height={buttonHeight} width={buttonWidth} />
          <Skeleton height={buttonHeight} width={buttonWidth} />
          <Skeleton height={buttonHeight} width={buttonWidth} />
        </Group>
      )}

      <Group>
        <Skeleton height={buttonHeight} width={buttonWidth} />
        <Skeleton height={buttonHeight} width={buttonWidth} />
      </Group>
    </Group>
  );
}
