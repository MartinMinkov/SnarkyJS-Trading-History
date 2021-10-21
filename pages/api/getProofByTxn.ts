import type { NextApiRequest, NextApiResponse } from "next";

import { query as q } from "faunadb";
import { faunaClient } from "../../lib/db/fauna";
import { APIResponse } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method == "GET") {
    const { txnId } = req.query;
    try {
      let query = (await faunaClient.query(
        q.Get(q.Match(q.Index("proofs_by_txnid"), txnId))
      )) as APIResponse;
      res.status(200).json({ data: query.data });
    } catch (error) {
      res.status(400).json({ error: (error as Error).toString() });
    }
  }
}
