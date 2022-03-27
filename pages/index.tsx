import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <Container></Container>;
};

export default Home;

const Container = styled.div`
  height: 4rem;
  background-color: green;
  width: 4rem;
`;
