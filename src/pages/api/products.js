import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.izerapb.mongodb.net/?retryWrites=true&w=majority`;

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

    if (req.method === "GET") {
      if (req.query.category === undefined) {
        const result = await productsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: result });
      } else {
        const components = await productsCollection
          .find({
            category: req.query.category,
          })
          .toArray();
        res.send({ message: "success", status: 200, data: components });
      }
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
