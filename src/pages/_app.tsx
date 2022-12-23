import type { AppProps } from "next/app";
import { useState } from "react";
import { useUserStore } from "../store/userStore";
import { SessionProvider } from "next-auth/react";
import "../styles/styles.css";
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const setUser = useUserStore((state) => state.setUser);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
