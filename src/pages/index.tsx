import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";
import { Product } from "@/components/Product";

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
      <main className={"main"}>
        <Navbar />

        <div className="gradient-01" />

        <Product />
      </main>
    </>
  );
}
