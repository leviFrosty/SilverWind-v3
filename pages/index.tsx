import { Button, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Title order={1}>Hello World</Title>
      <Button color="purple">Press Me!</Button>
    </div>
  );
};

export default Home;
