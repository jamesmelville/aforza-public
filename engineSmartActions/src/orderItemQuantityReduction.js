function runAction(payload) {

    payload.data.message =  "The Order Item Quantities have been reduced";
    let order = payload.data.record;
    let productIdToPricebookEntry = new Map();
    let productIdToOrderItem = new Map();

    payload.data.related.PricebookEntry.forEach(pbe => {
        productIdToPricebookEntry.set(pbe.Product2Id, pbe);
    });

    payload.data.related.OrderItem.forEach(orderItem => {
        productIdToOrderItem.set(orderItem.Product2Id, orderItem);
    });

    if (order.OrderItemQuantityAdjusted__c !== true) {
        for (let i = 1; i < 11; i++) {
            let productLookupName = 'MissingProduct' + i + '__c';
            let missingQuantityName = 'MissingQuantity' + i + '__c';

            if (order[productLookupName] && order[missingQuantityName]) {
                if (productIdToOrderItem.has(order[productLookupName]) && productIdToPricebookEntry.has(order[productLookupName])) {
                    if (productIdToOrderItem.get(order[productLookupName]).Quantity - order[missingQuantityName] >= 0) {
                        productIdToOrderItem.get(order[productLookupName]).Quantity -= order[missingQuantityName];
                        order.OrderItemQuantityAdjusted__c = true;
                        payload.data.message += '\n' + productIdToPricebookEntry.get(order[productLookupName]).Name + ': ' + order[missingQuantityName];
                    }
                }
            }
        }
    }

    payload.data.updateDeviceData = {
        Order: true,
        OrderItem: true
    }
    payload.data.reprice = false;
    
    return payload;
}