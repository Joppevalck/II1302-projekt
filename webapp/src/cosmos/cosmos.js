const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");

const newItem = {
    id: "3",
    category: "fun",
    name: "Cosmos DB",
    description: "Complete Cosmos DB Node.js Quickstart ⚡",
    isComplete: false
};

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);

const deviceContainer = database.container(containerId.device);
const dataContainer = database.container(containerId.data);

const cosmos = {
    async getAllData() {
        // query to return all items
        const querySpec = {
            query: "SELECT * from c"
        };
        
        // read all items in the Items container
        const { resources: items } = await dataContainer.items
        .query(querySpec)
        .fetchAll();

        return items;
    },

    async getAllDevicesLatestData() {
        const dataQuery = {
            query: "SELECT c.deviceId, MAX(c._ts) AS timeStamp FROM c GROUP BY c.deviceId",
        }
        const { resources: data } = await dataContainer.items
        .query(dataQuery)
        .fetchAll();

        return data;
    },

    async getAllDevices() {
        const deviceQuery = {
            query: "SELECT c.deviceId, MAX(c._ts) AS timeStamp FROM c GROUP BY c.deviceId"
        }
        const { resources: devices } = await deviceContainer.items
        .query(deviceQuery)
        .fetchAll();   
        
        return devices;
    },

    async getDeviceData(deviceId){
        // TODO change to get historical data
        const query = {
            query: "SELECT * FROM c WHERE c.deviceId = @deviceId ORDER BY c._ts DESC OFFSET 0 LIMIT 1",
            parameters: [{name: "@deviceId", value: deviceId}]
        }
        const { resources: items } = await dataContainer.items
        .query(querySpec)
        .fetchAll(); 
        
        return items;
    }
}

export default cosmos;

// async function main() {
//     // <CreateClientObjectDatabaseContainer>

//     // Make sure Tasks database is already setup. If not, create it.
//     //   await dbContext.create(client, databaseId, containerId);
//     // </CreateClientObjectDatabaseContainer>

//     try {
//         // <QueryItems>
//         console.log(`Querying container: Items`);

//         // query to return all items
//         const querySpec = {
//         query: "SELECT * from c"
//         };

//         // read all items in the Items container
//         const { resources: items } = await container.items
//         .query(querySpec)
//         .fetchAll();

//         items.forEach(item => {
//         console.log(`${item.id} - ${item.description}`);
//         });
//         // </QueryItems>

//         // <CreateItem>
//         /** Create new item
//         * newItem is defined at the top of this file
//         */
//         const { resource: createdItem } = await container.items.create(newItem);

//         console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`);
//         // </CreateItem>

//         // <UpdateItem>
//         /** Update item
//         * Pull the id and partition key value from the newly created item.
//         * Update the isComplete field to true.
//         */
//         const { id, category } = createdItem;

//         createdItem.isComplete = true;

//         const { resource: updatedItem } = await container
//         .item(id, category)
//         .replace(createdItem);

//         console.log(`Updated item: ${updatedItem.id} - ${updatedItem.description}`);
//         console.log(`Updated isComplete to ${updatedItem.isComplete}\r\n`);
//         // </UpdateItem>

//         // <DeleteItem>
//         /**
//         * Delete item
//         * Pass the id and partition key value to delete the item
//         */
//         // const { resource: result } = await container.item(id, category).delete();
//         // console.log(`Deleted item with id: ${id}`);
//         // </DeleteItem>

//     } catch (err) {
//         console.log(err.message);
//     }
// }