import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import { supabase } from "../helpers/supabase";
const Index = () => {
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
