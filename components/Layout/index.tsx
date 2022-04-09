import QueryString from "qs";
import React, { ReactNode, useState } from "react";
import useSWR from "swr";
import fetcher from "../../library/api/fetcher";
import {
  strapiApiEndpoint,
  strapiContentEndpoint,
} from "../../library/api/strapi";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  Skeleton,
  Group,
  Text,
  Button,
  Transition,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Navigation from "../../types/Layout/Navigation";
import BrandNameWithLogo from "./Nav/BrandNameWithLogo";
import NavDesktopSkeleton from "./Nav/HeaderSkeleton";
import Link from "next/link";
import UserSection from "./Nav/UserSection";
import NavSkeleton from "./Nav/NavSkeleton";
import BreadCrumbs from "./Breadcrumbs";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [opened, setOpened] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px )");
  const theme = useMantineTheme();

  // Fetches nav content
  const query = QueryString.stringify({
    populate: [
      "menuSection",
      "menuSection.links",
      "userSection",
      "userSection.cartIcon",
      "userSection.profileIcon",
      "companyLogo",
    ],
  });
  // TODO: Add ErrorBoundary for failed fetches
  const { data: navResponse, error } = useSWR(
    `${strapiApiEndpoint}/navigation?${query}`,
    fetcher
  );
  const navContent: Navigation = navResponse;

  // Fetches footer content

  return (
    <AppShell
      styles={{
        main: {
          minHeight: "80vh",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      header={
        // Always visible regardless of screen size
        <Header height={60} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.purple[6]}
                mr={"md"}
              />
            </MediaQuery>
            {navContent ? (
              <Group position="apart" style={{ width: "100%", gap: "0" }}>
                <BrandNameWithLogo
                  isSmallScreen={isSmallScreen}
                  logo={{
                    alt: navContent.data.attributes.companyLogo.data.attributes
                      .alternativeText,
                    src: `${strapiContentEndpoint}${navContent.data.attributes.companyLogo.data.attributes.url}`,
                  }}
                  name={navContent.data.attributes.companyTitle}
                  displayLogo={navContent.data.attributes.displayLogo}
                />
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Group style={{ gap: "0px" }}>
                    {navContent.data.attributes.menuSection?.links.map(
                      (link) => (
                        <Link href={link.href} passHref key={link.id}>
                          <Button color="violet" variant="subtle" component="a">
                            {link.label}
                          </Button>
                        </Link>
                      )
                    )}
                  </Group>
                </MediaQuery>
                <UserSection
                  isSmallScreen={isSmallScreen}
                  content={navContent.data.attributes.userSection}
                />
              </Group>
            ) : (
              <NavDesktopSkeleton isSmallScreen={isSmallScreen} />
            )}
          </div>
        </Header>
      }
      navbar={
        // Nav only visible on mobile
        isSmallScreen ? (
          <Transition
            mounted={opened}
            transition="scale-y"
            duration={160}
            timingFunction="ease"
          >
            {(styles) => (
              <Navbar
                p="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                height={"fit-content"}
                style={{ position: "fixed", ...styles }}
              >
                <Group spacing="sm">
                  {navContent ? (
                    navContent.data.attributes.menuSection?.links.map(
                      (link) => (
                        <Link href={link.href} passHref key={link.id}>
                          <Button
                            onClick={() => setOpened((o) => !o)}
                            fullWidth
                            color="violet"
                            variant="gradient"
                            gradient={{ from: "violet", to: "grape", deg: 35 }}
                            component="a"
                          >
                            {link.label}
                          </Button>
                        </Link>
                      )
                    )
                  ) : (
                    <NavSkeleton />
                  )}
                </Group>
              </Navbar>
            )}
          </Transition>
        ) : undefined
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
    >
      <BreadCrumbs />
      {children}
    </AppShell>
  );
}
