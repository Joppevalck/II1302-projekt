
console.log(process.env)

const secret = process.env.VUE_APP_COSMOS_DB_SECRET;

const config = {
    endpoint: "https://ii1302.documents.azure.com:443/",
    key: secret,
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
}

module.exports = config;