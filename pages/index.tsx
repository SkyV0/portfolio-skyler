import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Layout from "../src/components/Layout";
import Seo from "../src/components/Seo";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

    </Layout>
  );
};

export default Home;