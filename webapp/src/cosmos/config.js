
const config = {
    endpoint: "https://ii1302.documents.azure.com:443/",
    key: "N3IpIInMiBHUEUxbA8ouXtQj9mkgWuSHW9EIG8SlLNDFx1G7aaCXCISkLd2rXbjlOC2aRqPaGOkyD8gMkWpx9g==",
    databaseId: "ii1302",
    containerId: "test_data1",
    partitionKey: { kind: "Hash", paths: ["/smartbins/bin"] }
  };
  
  module.exports = config;