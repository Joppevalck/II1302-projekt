
const secret = process.env.VUE_APP_COSMOS_DB_SECRET;

const config = {
    endpoint: "https://ii1302.documents.azure.com:443/",
    key: secret,
    databaseId: "ii1302",
    containerId: "test_data1",
    partitionKey: { kind: "Hash", paths: ["/smartbins/bin"] }
  };

module.exports = config;