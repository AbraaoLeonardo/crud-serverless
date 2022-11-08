'use strict';

const AWS = require("aws-sdk")

const UpdateItem = async (event) => {

    const dynamoDB = new AWS.dynamoDB.DocumentClient();
    const {item} = JSON.parse(event.body);
    const {id} = event.pathParameters 
    
    await dynamoDB.update(
        {
            TableName: "ItemTableName",
            Key: {id},
            UpdateExpression: 'set item status = :itemStatus',
            ExpressionAttributeValues: {
                ':item status': itemStatus
            },
            ReturnValues: "ALL_NEW"
        }
    ).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    }
}

module.exports = {
    handler: fetchItem
}
