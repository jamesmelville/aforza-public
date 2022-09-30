function runAction(payload) {
    try {
    const { record: order, related } = payload.data;
    const [account] = related.Account;
    const creditLimit = account.AvailableCredit__c;
    const orderTotal = order.TotalAmount;
    if (creditLimit === null || creditLimit === undefined) {
    throw new Error(" No credit limit available");
    }
    if (orderTotal === null || orderTotal === undefined) {
    throw new Error(" No order total available");
    }
    if (creditLimit < 0) {
    throw new Error(
    ` Credit Limit Exceeded`
    );
    }
    payload.data.message = ` Order total ${orderTotal} is within credit
    limit of ${creditLimit}`;
    } catch (error) {
    payload.data.error = error?.message;
    }
    return payload;
    }