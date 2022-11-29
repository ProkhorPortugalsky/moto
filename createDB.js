var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://0.0.0.0:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("moto");
        database.dropDatabase()
        database = client.db("moto");
        const motos = database.collection("motos");
        const result = await motos.insertOne({name:"KTM 125"});
        console.log(`${result} documents were inserted`);
    } 
    finally {
        await client.close();
    }
}
run()
