import Head from "next/head";
import BottomControl from "../components/BottomControl";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";
import { getPlaylists } from "../utils/fakeData";

export default function Home({ playlists }) {
  return (
    <div className="">
      <Head>
        <title>Spotify UI Clone</title>
        <meta name="description" content="Spotify UI Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-5 bg-[#181818]">
        <SideBar playlists={playlists} />
        <MainSection />
      </div>

      <BottomControl />
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
