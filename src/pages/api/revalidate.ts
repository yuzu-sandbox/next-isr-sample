import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("re validate");

  const secret = req.headers.authorization;

  if (secret !== process.env.ON_DEMAND_SECRET_TOKEN) {
    return res.status(401).json({ message: "invalid token" });
  }

  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error revalidateing");
  }
};

export default handler;
