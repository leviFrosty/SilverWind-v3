import {
  Accordion,
  Badge,
  Button,
  Code,
  Divider,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "..";

interface Props {
  error: Error;
}

export default function ErrorFallback({ error }: Props) {
  const router = useRouter();

  return (
    <Layout skeletonMode>
      <Badge color="red" size="lg">
        Error
      </Badge>
      <Title>Uh snap! Something went wrong.</Title>
      <Accordion initialItem={0}>
        <Accordion.Item label="Message">
          <Code>{error.message}</Code>
        </Accordion.Item>
        <Accordion.Item label="Stack Trace">
          <Code>{error.stack || "No stack trace available."}</Code>
        </Accordion.Item>
      </Accordion>
      <Button color="violet" mt="md" onClick={() => router.reload()}>
        Reload Page
      </Button>
    </Layout>
  );
}
