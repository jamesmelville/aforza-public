function runAction(payload) {

    let priceChanged = false;
    payload.data.related.OrderItem.forEach(orderItem => {
        if(orderItem.OriginalUnitPrice__c && orderItem.OriginalUnitPrice__c != orderItem.UnitPrice) {
            orderItem.UnitPrice = orderItem.OriginalUnitPrice__c;
            priceChanged = true;
        }
    });

    if(priceChanged) {
        payload.data.message = "Prices corrected";
        payload.data.updateDeviceData = {
            Order: true,
            OrderItem: true
        };
        payload.data.reprice = false;
    }
    else {
        payload.data.message = "Prices correct";
        payload.data.updateDeviceData = false;
        payload.data.reprice = false;
    }
    return payload;
}