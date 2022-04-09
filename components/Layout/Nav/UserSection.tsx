import { Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { strapiContentEndpoint } from "../../../library/api/strapi";
import NavUserSection from "../../../types/Layout/NavUserSection";

const userSectionIcons = 20;

interface Props {
  content: NavUserSection;
  isSmallScreen: boolean;
}

export default function UserSection({ content, isSmallScreen }: Props) {
  return (
    <Group style={isSmallScreen ? { gap: "5px" } : undefined}>
      <Link href="/profile" passHref>
        <Button
          component="a"
          size={isSmallScreen ? "xs" : undefined}
          color="violet"
          variant="subtle"
          styles={{
            leftIcon: {
              img: {
                filter:
                  // Purple filter target value #A27DF8
                  "invert(57%) sepia(73%) saturate(3959%) hue-rotate(225deg) brightness(107%) contrast(94%)",
              },
            },
          }}
          leftIcon={
            <Image
              src={`${strapiContentEndpoint}${content.profileIcon.data.attributes.url}`}
              alt={content.profileIcon.data.attributes.alternativeText}
              height={userSectionIcons}
              width={userSectionIcons}
            />
          }
        >
          {content.displayText && !isSmallScreen ? content.profileText : null}
        </Button>
      </Link>
      <Link href="/cart" passHref>
        <Button
          size={isSmallScreen ? "xs" : undefined}
          component="a"
          color="violet"
          variant={content.cartAccentType}
          styles={{
            leftIcon: {
              img: {
                filter:
                  // Conditionally filter colors icon based on background setting
                  content.cartAccentType == "filled" || "default"
                    ? // Purple filter target value #A27DF8
                      "invert(57%) sepia(73%) saturate(3959%) hue-rotate(225deg) brightness(107%) contrast(94%)"
                    : // White filter target value #fff
                      "invert(100%) sepia(64%) saturate(5253%) hue-rotate(180deg) brightness(117%) contrast(100%)",
              },
            },
          }}
          leftIcon={
            <Image
              src={`${strapiContentEndpoint}${content.cartIcon.data.attributes.url}`}
              alt={content.cartIcon.data.attributes.alternativeText}
              height={userSectionIcons}
              width={userSectionIcons}
            />
          }
        >
          {content.displayText && !isSmallScreen ? content.cartText : null}
        </Button>
      </Link>
    </Group>
  );
}
