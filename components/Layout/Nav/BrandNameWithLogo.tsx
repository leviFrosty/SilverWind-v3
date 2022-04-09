import { Group, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  logo: {
    alt: string | null;
    src: string | null;
  } | null;
  name: string;
  displayLogo: boolean;
  isSmallScreen: boolean;
}

export default function BrandNameWithLogo({
  logo,
  name,
  displayLogo,
  isSmallScreen,
}: Props) {
  return (
    <Group style={isSmallScreen ? { gap: "0" } : undefined}>
      {displayLogo && logo && logo.src ? (
        <Link href="/" passHref>
          <Image
            alt={logo.alt || "Logo"}
            src={logo.src}
            height={25}
            width={25}
          />
        </Link>
      ) : null}
      <Link href="/" passHref>
        <Text
          ml={displayLogo ? "sm" : undefined}
          component="a"
          color="violet"
          size="xl"
          weight="bold"
        >
          {name}
        </Text>
      </Link>
    </Group>
  );
}
