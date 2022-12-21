import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

import "../styles/styles.css";
import { useUserStore } from "../store/userStore";
import { supabase } from "../helpers/supabase";
export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  async function grabUser() {
    const { data } = await supabase.auth.getUser();
    console.log(data, "From app");

    const userData = {
      email: data.user?.email || "",
      name: data.user?.email?.split("@")[0] || "",
    };
    setUser(userData);
  }
  useEffect(() => {
    grabUser();
  });
  const setUser = useUserStore((state) => state.setUser);
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
