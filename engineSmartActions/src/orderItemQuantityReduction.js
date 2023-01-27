function runAction(payload) {

    let messages = new Array();
    let errors= new Array();

    let order = payload.data.record;

    //pricebook records to get product tax rate & name
    let productIdToPricebookEntry = new Map();

    //map of product ids to array of Order Items which will be sorted by unit price descending
    let productIdToOrderItems = new Map();

    payload.data.related.PricebookEntry.forEach(pbe => {
        if(pbe.Pricebook2Id == order.Pricebook2Id) {
            productIdToPricebookEntry.set(pbe.Product2Id, pbe);
        }
    });

    payload.data.related.OrderItem.forEach(orderItem => {
        if(orderItem.aforza__Promotion__c) {
            //should be unreachable but worth validating
            if(!productIdToPricebookEntry.has(orderItem.Product2Id)) {
                errors.push('Product ' + orderItem.Product2Id + ' missing from Pricebook.');
            }

            //reset quantity in case this code has been run before
            orderItem.Quantity = orderItem.OriginalQuantity__c;

            if(productIdToOrderItems.has(orderItem.Product2Id)) {
                //each product might occur multiple times in an order. When missing some we'll reduce qty with most expensive first,
                // so we generate an array sorted highest to lowest unit price
                let orderItems = productIdToOrderItems.get(orderItem.Product2Id);
                let i = 0;
                while((i < orderItems.length) && (orderItem.UnitPrice < orderItems[i].UnitPrice)) {
                    i++;
                }
                orderItems.splice(i, 0, orderItem); 
            }
            else {
                productIdToOrderItems.set(orderItem.Product2Id, new Array(orderItem));
            }
        }
    });


    for (let i = 1; i < 11; i++) {
        let missingProductId = order['MissingProduct' + i + '__c'];
        let missingQuantity = order['MissingQuantity' + i + '__c'];

        if (missingProductId && !productIdToOrderItems.has(missingProductId)) {
            errors.push('Missing Product ' + i + ' is not included in a Promotion in this order. Please check for the correct product.');
        }
        else if(missingProductId && !missingQuantity) {
            errors.push('Please enter a quantity for Missing Product ' + i + '.');
        }
        else if (missingProductId && missingQuantity) {
            let orderItems = productIdToOrderItems.get(missingProductId);
            let qtyToRemove = missingQuantity;
            let j = 0;

            while(qtyToRemove > 0 && j < orderItems.length) {
                let orderItem = orderItems[j];
                if(orderItem.Quantity >= qtyToRemove) {
                    orderItem.Quantity = orderItem.Quantity - qtyToRemove;
                    qtyToRemove = 0;
                }
                else {
                    qtyToRemove = qtyToRemove - orderItem.Quantity;
                    orderItem.Quantity = 0;
                }
                j++;
            }

            if(qtyToRemove > 0) {
                errors.push('Missing Quantity exceeds ordered promotional quantity for Missing Product ' + i + '.');
            }
            else {
                messages.push('Promotional Quantity(ies) adjusted for Missing Product ' + i +'.');
            }
        }
    }

    // recalc tax on new qty
    let taxTotal = 0;
    payload.data.related.OrderItem.forEach(orderItem => {
        if(productIdToPricebookEntry.has(orderItem.Product2Id)) {
            let pbe = productIdToPricebookEntry.get(orderItem.Product2Id);
            // only do for promo
            if(pbe.Name != 'Tax') {
                if(orderItem.aforza__Promotion__c && pbe.aforza__Tax_Percent__c) {
                    let tax = orderItem.Quantity * orderItem.UnitPrice * pbe.aforza__Tax_Percent__c;
                    tax = Math.round((tax + Number.EPSILON)) / 100;
                    orderItem.aforza__Tax__c = tax;
                }
                taxTotal += orderItem.aforza__Tax__c;
            }
        }
    });

    payload.data.related.OrderItem.forEach(orderItem => {
        if(productIdToPricebookEntry.has(orderItem.Product2Id)) {
            let pbe = productIdToPricebookEntry.get(orderItem.Product2Id);
            if(pbe.Name == 'Tax') {
                orderItem.UnitPrice = taxTotal;
            }
        }
    });

    if(errors.length > 0) {
        payload.data.error = errors.join('\r\n');
        payload.data.updateDeviceData = false;
        payload.data.reprice = false;
		payload.data.blockExecution = true;
    }
    else {
        payload.data.message = messages.join('\r\n');
        payload.data.updateDeviceData = {
            Order: true,
            OrderItem: true
        }
        payload.data.reprice = false;

    }
    
    return payload;
}