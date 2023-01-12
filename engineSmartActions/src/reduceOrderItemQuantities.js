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

    if (order.Order_Item_Quantity_Adjusted__c !== true) {
        if (order.Missing_Product_1__c && order.Missing_Quantity_1__c) {
            if (productIdToOrderItem.has(order.Missing_Product_1__c) && productIdToPricebookEntry.has(order.Missing_Product_1__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_1__c).Quantity - order.Missing_Quantity_1__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_1__c).Quantity -= order.Missing_Quantity_1__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_1__c).Name + ': ' + order.Missing_Quantity_1__c;
                }
            }
        }
        if (order.Missing_Product_2__c && order.Missing_Quantity_2__c) {
            if (productIdToOrderItem.has(order.Missing_Product_2__c) && productIdToPricebookEntry.has(order.Missing_Product_2__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_2__c).Quantity - order.Missing_Quantity_2__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_2__c).Quantity -= order.Missing_Quantity_2__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_2__c).Name + ': ' + order.Missing_Quantity_2__c;
                }
            }    }
        if (order.Missing_Product_3__c && order.Missing_Quantity_3__c) {
            if (productIdToOrderItem.has(order.Missing_Product_3__c) && productIdToPricebookEntry.has(order.Missing_Product_3__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_3__c).Quantity - order.Missing_Quantity_3__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_3__c).Quantity -= order.Missing_Quantity_3__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_3__c).Name + ': ' + order.Missing_Quantity_3__c;
                }
            }    }
        if (order.Missing_Product_4__c && order.Missing_Quantity_4__c) {
            if (productIdToOrderItem.has(order.Missing_Product_4__c) && productIdToPricebookEntry.has(order.Missing_Product_4__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_4__c).Quantity - order.Missing_Quantity_4__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_4__c).Quantity -= order.Missing_Quantity_4__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_4__c).Name + ': ' + order.Missing_Quantity_4__c;
                }
            }    }
        if (order.Missing_Product_5__c && order.Missing_Quantity_5__c) {
            if (productIdToOrderItem.has(order.Missing_Product_5__c) && productIdToPricebookEntry.has(order.Missing_Product_5__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_5__c).Quantity - order.Missing_Quantity_5__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_5__c).Quantity -= order.Missing_Quantity_5__c
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_5__c).Name + ': ' + order.Missing_Quantity_5__c;
                }
            }    }
        if (order.Missing_Product_6__c && order.Missing_Quantity_6__c) {
            if (productIdToOrderItem.has(order.Missing_Product_6__c) && productIdToPricebookEntry.has(order.Missing_Product_6__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_6__c).Quantity - order.Missing_Quantity_6__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_6__c).Quantity -= order.Missing_Quantity_6__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_6__c).Name + ': ' + order.Missing_Quantity_6__c;
                }
            }    }
        if (order.Missing_Product_7__c && order.Missing_Quantity_7__c) {
            if (productIdToOrderItem.has(order.Missing_Product_7__c) && productIdToPricebookEntry.has(order.Missing_Product_7__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_7__c).Quantity - order.Missing_Quantity_7__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_7__c).Quantity -= order.Missing_Quantity_7__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_7__c).Name + ': ' + order.Missing_Quantity_7__c;
                }
            }    }
        if (order.Missing_Product_8__c && order.Missing_Quantity_8__c) {
            if (productIdToOrderItem.has(order.Missing_Product_8__c) && productIdToPricebookEntry.has(order.Missing_Product_8__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_8__c).Quantity - order.Missing_Quantity_8__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_8__c).Quantity -= order.Missing_Quantity_8__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_8__c).Name + ': ' + order.Missing_Quantity_8__c;
                }
            }    }
        if (order.Missing_Product_9__c && order.Missing_Quantity_9__c) {
            if (productIdToOrderItem.has(order.Missing_Product_9__c) && productIdToPricebookEntry.has(order.Missing_Product_9__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_9__c).Quantity - order.Missing_Quantity_9__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_9__c).Quantity -= order.Missing_Quantity_9__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_9__c).Name + ': ' + order.Missing_Quantity_9__c;
                }
            }    }
        if (order.Missing_Product_10__c && order.Missing_Quantity_10__c) {
            if (productIdToOrderItem.has(order.Missing_Product_10__c) && productIdToPricebookEntry.has(order.Missing_Product_10__c)) {
                if (productIdToOrderItem.get(order.Missing_Product_10__c).Quantity - order.Missing_Quantity_10__c >= 0) {
                    productIdToOrderItem.get(order.Missing_Product_10__c).Quantity -= order.Missing_Quantity_10__c;
                    order.Order_Item_Quantity_Adjusted__c = true;
                    payload.data.message += '\n' + productIdToPricebookEntry.get(order.Missing_Product_10__c).Name + ': ' + order.Missing_Quantity_10__c;
                }
            }    
        }
    }

    payload.data.updateDeviceData = true;
    payload.data.updateDeviceData.Order = true;
    payload.data.updateDeviceData.OrderIem = true;
    payload.data.reprice = false;
    
    return payload;
}