function runAction(payload) {
    payload.data.message = "";
    let total = 0;
    payload.data.related.OrderItem.forEach(orderItem => {
        payload.data.related.aforza__Relationship_Rule__c.forEach(productRule => {
            if (orderItem.Product2Id === productRule.aforza__Source_Product__c) {
                total += orderItem.Quantity * productRule.aforza__Quantity__c
            }
        });
    });

    payload.data.related.OrderItem.forEach(orderItem => {
        if (orderItem.Product2.ProductCode === 'DRS-001') {
            orderItem.Quantity = total;
        }
    });

    payload.data.message += "Your order has been validated";

    if (payload.data.message === "") {
        payload.data.error = "An Error has occurred";
        payload.data.message = null;
    }

    payload.data.updateDeviceData = {
        Order: true,
        OrderItem: true
    }
    payload.data.reprice = true;

    return payload;
}