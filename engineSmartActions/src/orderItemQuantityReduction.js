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
        if (order.MissingProduct1__c && order.MissingQuantity1__c) {
            if (productIdToOrderItem.has(order.MissingProduct1__c) && productIdToPricebookEntry.has(order.MissingProduct1__c)) {
                if (productIdToOrderItem.get(order.MissingProduct1__c).Quantity - order.MissingQuantity1__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct1__c).Quantity -= order.MissingQuantity1__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct1__c).Name + ': ' + order.MissingQuantity1__c;
                }
            }
        }
        if (order.MissingProduct2__c && order.MissingQuantity2__c) {
            if (productIdToOrderItem.has(order.MissingProduct2__c) && productIdToPricebookEntry.has(order.MissingProduct2__c)) {
                if (productIdToOrderItem.get(order.MissingProduct2__c).Quantity - order.MissingQuantity2__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct2__c).Quantity -= order.MissingQuantity2__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct2__c).Name + ': ' + order.MissingQuantity2__c;
                }
            }    }
        if (order.MissingProduct3__c && order.MissingQuantity3__c) {
            if (productIdToOrderItem.has(order.MissingProduct3__c) && productIdToPricebookEntry.has(order.MissingProduct3__c)) {
                if (productIdToOrderItem.get(order.MissingProduct3__c).Quantity - order.MissingQuantity3__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct3__c).Quantity -= order.MissingQuantity3__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct3__c).Name + ': ' + order.MissingQuantity3__c;
                }
            }    }
        if (order.MissingProduct4__c && order.MissingQuantity4__c) {
            if (productIdToOrderItem.has(order.MissingProduct4__c) && productIdToPricebookEntry.has(order.MissingProduct4__c)) {
                if (productIdToOrderItem.get(order.MissingProduct4__c).Quantity - order.MissingQuantity4__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct4__c).Quantity -= order.MissingQuantity4__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct4__c).Name + ': ' + order.MissingQuantity4__c;
                }
            }    }
        if (order.MissingProduct5__c && order.MissingQuantity5__c) {
            if (productIdToOrderItem.has(order.MissingProduct5__c) && productIdToPricebookEntry.has(order.MissingProduct5__c)) {
                if (productIdToOrderItem.get(order.MissingProduct5__c).Quantity - order.MissingQuantity5__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct5__c).Quantity -= order.MissingQuantity5__c
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct5__c).Name + ': ' + order.MissingQuantity5__c;
                }
            }    }
        if (order.MissingProduct6__c && order.MissingQuantity6__c) {
            if (productIdToOrderItem.has(order.MissingProduct6__c) && productIdToPricebookEntry.has(order.MissingProduct6__c)) {
                if (productIdToOrderItem.get(order.MissingProduct6__c).Quantity - order.MissingQuantity6__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct6__c).Quantity -= order.MissingQuantity6__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct6__c).Name + ': ' + order.MissingQuantity6__c;
                }
            }    }
        if (order.MissingProduct7__c && order.MissingQuantity7__c) {
            if (productIdToOrderItem.has(order.MissingProduct7__c) && productIdToPricebookEntry.has(order.MissingProduct7__c)) {
                if (productIdToOrderItem.get(order.MissingProduct7__c).Quantity - order.MissingQuantity7__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct7__c).Quantity -= order.MissingQuantity7__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct7__c).Name + ': ' + order.MissingQuantity7__c;
                }
            }    }
        if (order.MissingProduct8__c && order.MissingQuantity8__c) {
            if (productIdToOrderItem.has(order.MissingProduct8__c) && productIdToPricebookEntry.has(order.MissingProduct8__c)) {
                if (productIdToOrderItem.get(order.MissingProduct8__c).Quantity - order.MissingQuantity8__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct8__c).Quantity -= order.MissingQuantity8__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct8__c).Name + ': ' + order.MissingQuantity8__c;
                }
            }    }
        if (order.MissingProduct9__c && order.MissingQuantity9__c) {
            if (productIdToOrderItem.has(order.MissingProduct9__c) && productIdToPricebookEntry.has(order.MissingProduct9__c)) {
                if (productIdToOrderItem.get(order.MissingProduct9__c).Quantity - order.MissingQuantity9__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct9__c).Quantity -= order.MissingQuantity9__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct9__c).Name + ': ' + order.MissingQuantity9__c;
                }
            }    }
        if (order.MissingProduct10__c && order.MissingQuantity10__c) {
            if (productIdToOrderItem.has(order.MissingProduct10__c) && productIdToPricebookEntry.has(order.MissingProduct10__c)) {
                if (productIdToOrderItem.get(order.MissingProduct10__c).Quantity - order.MissingQuantity10__c >= 0) {
                    productIdToOrderItem.get(order.MissingProduct10__c).Quantity -= order.MissingQuantity10__c;
                    order.OrderItemQuantityAdjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.MissingProduct10__c).Name + ': ' + order.MissingQuantity10__c;
                }
            }    
        }
    }

    payload.data.updateDeviceData = true;
    payload.data.updateDeviceData.Order = true;
    payload.data.updateDeviceData.OrderItem = true;
    payload.data.reprice = false;
    
    return payload;
}