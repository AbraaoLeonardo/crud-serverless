'use strict';

const AWS = require("aws-sdk")

const fetchItem = async (event) => {

    const dynamoDB = new AWS.dynamoDB.DocumentClient();

    let items;
    
    try{
        const results = await dynamoDB.scan(
            {
                TableName: "ItemTableName"
            }
        ).promise();
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
