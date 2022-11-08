'use strict';

const AWS = require("aws-sdk")

const fetchItem = async (event) => {

    const dynamoDB = new AWS.dynamoDB.DocumentClient();
    const {id} = event.pathParameters 

    let item;
    
    try{
        const results = await dynamoDB.scan({
            TableName: "ItemTableName",
            Key: {id}
        }
    ).promise()
    item = results.item
} catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    }
}

module.exports = {
    handler: fetchItem
}
