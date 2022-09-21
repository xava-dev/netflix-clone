import { magicAdmin } from "../../lib/magic";

export default async function login(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const auth = req.headers.authorization;
      const didToken = auth ? auth.slice(7) : "";

      // @ts-ignore
      const metadata = await magicAdmin.users.getMetadataByToken(didToken);
    } catch (error) {
      console.error("Something went wrong logging in", error);
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
