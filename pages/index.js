import Head from "next/head";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify UI Clone</title>
        <meta name="description" content="Spotify UI Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-5">
        <SideBar />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
