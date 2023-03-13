function runAction(payload) {

    let account = payload.data.related.Account[0];
    let order = payload.data.record;

    order.Depot__c = account.Depot__c;
    order.Grid__c = account.PrimaryGridNumber__c;
    order.DeliveryDate__c = account.NextDeliveryDate__c;
    order.Route__c = account.PrimaryRouteReference__c;
    
    if(!account.Depot__c || !account.PrimaryGridNumber__c || !account.NextDeliveryDate__c || !account.PrimaryRouteReference__c) {
        payload.data.message = "You may need to populate the Depot, Grid, Delivery Date, and Route fields!";
    }
    else {
        payload.data.message = "Let's do this!";
    }
    payload.data.updateDeviceData = {
        Order: true,
        OrderItem: true
    }
    payload.data.reprice = false;
    payload.data.blockExecution = false;
    return payload;
}