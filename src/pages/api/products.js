// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.izerapb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("products");
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    if (req.method === "GET") {
      const components = await productsCollection
        .find({
          category: req.query.category,
        })
        .toArray();
      res.send({ message: "success", status: 200, data: components });
    }
    console.log(" You successfully connected to MongoDB!");

    // res.send({ message: "successfully running server" });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);

export default run;
