const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");


const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);

const deviceContainer = database.container(containerId.device);
const dataContainer = database.container(containerId.data);

const cosmos = {
    async createDevice(device) {
        const querySpec = {
            query: "SELECT * FROM c WHERE c.deviceId = @deviceId",
            parameters: [{name: "@deviceId", value: device.deviceId}]
        };

        const { resources: items } = await deviceContainer.items
        .query(querySpec)
        .fetchAll();

        console.log(items);

        if (items.length === 0) {
            const { resource: createdItem } = await deviceContainer.items.create(device);
    
            console.log(`\r\nCreated new item: ${createdItem}\r\n`);
        } 
        else {
            let id = items[0].id;
    
            device.id = id;
    
            const { resource: updatedItem } = await deviceContainer
            .item(id)
            .replace(device);
        }
    },

    async getAllDevicesLatestData() {
        const distinctDevicesQuery = {
            query: `
                SELECT Value root
                FROM (
                SELECT DISTINCT VALUE c.deviceId
                FROM c
                ) as root`
        } 
        const {resources: deviceIds} = await deviceContainer.items
        .query(distinctDevicesQuery)
        .fetchAll();

        let latestData = deviceIds.map(this.getLatestData);

        await Promise.all(latestData).then(res => {
            latestData = res.filter(x => x)
        });

        return latestData;
    },


    async getLatestData(deviceId) {
        const dataQuery = {
            query: `
                SELECT top 1 c.deviceId, c.distance, c._ts AS timestamp 
                FROM c 
                WHERE c.deviceId = @deviceId 
                ORDER BY c._ts DESC 
                `,
            parameters: [{name: "@deviceId", value: deviceId}]

        }
        const { resources: data } = await dataContainer.items
        .query(dataQuery)
        .fetchAll();

        return data[0];
    },

    async getAllDevices() {
        const deviceQuery = {
            query: "SELECT Value root FROM (SELECT c.id, c.deviceId, c.name, c.location, c.minDist, c.maxDist, MAX(c._ts) AS timestamp FROM c GROUP BY c.id, c.deviceId, c.name, c.location, c.minDist, c.maxDist) as root"
        }

        const testQuery = {
            query: "SELECT c.id, c.deviceId, c.name, c.location, c.maxDist, c.minDist FROM c"
        }
        const { resources: devices } = await deviceContainer.items
        .query(testQuery)
        .fetchAll();   

        console.log(devices);
        return devices;
    },

    async getDeviceHistoryData(deviceId) {
        const querySpec = {
            query: "SELECT * FROM c WHERE c.deviceId = @deviceId ORDER BY c._ts ",
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
