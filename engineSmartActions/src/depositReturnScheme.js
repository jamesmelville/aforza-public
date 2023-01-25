function runAction(payload) {

    payload.data.message = "";
    
    let productIdToQuantity = new Map();
    let targetProductIdToRelationshipRules = new Map();
    let productMap = new Map();

    payload.data.related.OrderItem.forEach(orderItem => {
        productIdToQuantity.set(orderItem.Product2Id, orderItem.Quantity);
    });

    payload.data.related.aforza__Relationship_Rule__c.forEach(rule => {
        if (rule.aforza__Type__c === 'Addition') {
            if (targetProductIdToRelationshipRules.has(rule.aforza__Target_Product__c)) {
                targetProductIdToRelationshipRules.get(rule.aforza__Target_Product__c).push(rule);
            } else {
                let tempRelationshipRules = new Array();
                tempRelationshipRules.push(rule);
                targetProductIdToRelationshipRules.set(rule.aforza__Target_Product__c, tempRelationshipRules);
            }
        }
    });

    payload.data.related.Product2.forEach(product => {
        productMap.set(product.Id, product);
    });

    payload.data.related.OrderItem.forEach(orderItem => {
        let tempTotal = 0;
        let sourceProductFound = false;
        if(targetProductIdToRelationshipRules.has(orderItem.Product2Id)) {
            targetProductIdToRelationshipRules.get(orderItem.Product2Id).forEach(rule => {
                if (productIdToQuantity.has(rule.aforza__Source_Product__c)) {
                    tempTotal += productIdToQuantity.get(rule.aforza__Source_Product__c) * rule.aforza__Quantity__c;
                    sourceProductFound = true;
                }
            });

            if (productMap.get(orderItem.Product2Id).ProductCode === '9999300') {
                orderItem.Quantity = tempTotal;
            }
        }
    });

    payload.data.message +=  "Your Deposit Return Scheme has been validated";
  
    payload.data.updateDeviceData = {
        Order: true,
        OrderItem: true
    }
    payload.data.reprice = true;
    
    return payload;
}