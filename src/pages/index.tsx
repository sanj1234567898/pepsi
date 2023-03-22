import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";
import { Product } from "@/components/Product";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { textVariant2 } from "@/utils/framerMotion";

export default function Home() {
  return (
    <>
      <Head>
        <title>PepsiCo</title>
        <meta name="description" content="Pepsi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <Layout>
        <Navbar />
        <motion.div
          className="gradient-01"
          variants={textVariant2(1)}
          initial={"hidden"}
          animate={"show"}
        />
        <Product />
      </Layout>
    </>
  );
}
