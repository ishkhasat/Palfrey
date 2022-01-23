const { MongoClient } = require('mongodb');

async function runMongoOperation(mongoOperation) {
    let uri = process.env.MongoDB_ConnectionUri;
    const client = new MongoClient(uri);

    try {
        console.log("Connecting...");
        await client.connect();
        console.log("Connected.");

        return await mongoOperation(client)

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findAllListings(client) {
    const results = await client.db().collection("Products").find({
    }).sort({ "title": -1 })
        .toArray();

    return results;
}

async function listProducts() {
    return await runMongoOperation(findAllListings);
}

module.exports = {
    listProducts
};