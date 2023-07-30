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
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      // Get the total count of documents in the collection
      const totalProducts = await productsCollection.countDocuments();
      const randomProducts = [];

      for (let i = 0; i < 10; i++) {
        // Generate a random index between 0 and totalProducts - 1
        const randomIndex = Math.floor(Math.random() * totalProducts);
        const randomProduct = await productsCollection.findOne(
          {},
          { skip: randomIndex }
        );
        randomProducts.push(randomProduct);
      }
      console.log(randomProducts.length);
      res.send({ message: "success", status: 200, data: randomProducts });
    }
    // if (req.method === "GET") {
    //   const id = req.params.id;
    //   console.log(id, "from");
    // }
    console.log(" You successfully connected to MongoDB!");

    // res.send({ message: "successfully running server" });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);

export default run;
