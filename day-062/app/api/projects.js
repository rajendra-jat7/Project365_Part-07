export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json([
        { id: "1", title: "Next.js Blog", description: "A modern blog using Next.js." },
        { id: "2", title: "E-Commerce Site", description: "An online store built with Next.js." }
      ]);
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  