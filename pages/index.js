import Head from "next/head";
import SideBar from "../components/SideBar";
import { getPlaylists } from "../utils/fakeData";

export default function Home({ playlists }) {
  return (
    <div className="">
      <Head>
        <title>Spotify UI Clone</title>
        <meta name="description" content="Spotify UI Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-5">
        <SideBar playlists={playlists} />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      playlists: getPlaylists()
    }
  };
}
