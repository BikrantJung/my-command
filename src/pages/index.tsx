import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useGroupStore } from "../store/groupStore";
import { useUserStore } from "../store/userStore";
import { CommandsData, GroupsData } from "../types";
const Preview = dynamic(() => import("../components/Preview"), {
  ssr: false,
});
interface IndexProps {
  groupData: GroupsData;
  commandData: CommandsData;
  sessionData: Session;
}

const Index = ({ groupData, commandData, sessionData }: IndexProps) => {
  const setGroup = useGroupStore((state) => state.setGroup);
  const setUser = useUserStore((state) => state.setUser);
  if (sessionData) {
    setUser(sessionData);
  }

  return (
    <div>
      <Head>
        <title>App</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
      </div>
      <Preview>Preview</Preview>
    </div>
  );
};
export default Index;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session, "From index");
  return {
    props: {
      sessionData: session,
    },
  };
};
