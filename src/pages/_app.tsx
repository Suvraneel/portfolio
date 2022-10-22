import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import RightBar from "../components/rightbar/rightbar";

require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dhiraj Chauhan</title>
        <link rel="favicon icon" href="/images/profile_picture_1.png" />
      </Head>
      <div className="flex flex-row w-full justify-between bg-black">
        <div className="w-full sm:w-11/12 flex flex-col">
          <Component {...pageProps} />
        </div>
        <div className="w-1/12 hidden sm:flex">
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default App;
