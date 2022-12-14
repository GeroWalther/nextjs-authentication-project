import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Schnecke45:Schnecke45@cluster0.laop02g.mongodb.net/demo-auth?retryWrites=true&w=majority"
  );

  return client;
}
