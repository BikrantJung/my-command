// Creating a new supabase server client object (e.g. in API route):
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const supabaseServerClient = createServerSupabaseClient({
  //     req,
  //     res,
  //   });
  //   const { data } = await supabaseServerClient.auth.getUser();
  //   console.log(data);
  res.status(200).json({ name: "bikrant" });
}
