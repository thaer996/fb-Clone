import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) {
    return <Login />;
  }
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Main */}

      <main className="bg-gray-200">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
