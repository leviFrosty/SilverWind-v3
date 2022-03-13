import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            purple: [
              "#ceb6ff",
              "#be9cff",
              "#ad83ff",
              "#9c69ff",
              "#8b4fff",
              "#7a36ff",
              "#6a1dff",
            ],
          },
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
