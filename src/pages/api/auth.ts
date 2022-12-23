// import { NextApiRequest, NextApiResponse } from "next";
// import { supabase } from "../../helpers/supabase";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     supabase.auth(req, res);
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).json({
//       message: `Method ${req.method} not allowed`,
//     });
//   }
// }
