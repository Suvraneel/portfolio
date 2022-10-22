import type { NextPage } from "next";
import { HomeView } from "../views";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <HomeView />
    </div>
  );
};

export default Home;
