import type { NextApiRequest, NextApiResponse } from "next";

import { query as q } from "faunadb";
import { faunaClient } from "../../lib/db/fauna";
import { customAlphabet } from "nanoid";
import { APIResponse } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method == "POST") {
    try {
      const body = JSON.parse(req.body);
      const nanoid = customAlphabet(
        "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        6
      );
      const url = nanoid();
      let query = await faunaClient.query(
        q.Create(q.Collection("proofs"), {
          data: { url: url, txnId: body.txnId, proof: body.proof },
        })
      );
      res.status(200).json({ data: query } as APIResponse);
    } catch (error) {
      res.status(400).json({ error: (error as Error).toString() });
    }
  }
}
