function runAction(payload) {
	try {
		const { record: order, related } = payload.data;
		const [account] = related.Account;
		const isPORequired = account.PORequired__c;
		const poNumber = order.PoNumber;
		const creditLimit = account.AvailableCredit__c;
		const orderTotal = order.TotalAmount;
		if (creditLimit === null || creditLimit === undefined) {
		throw new Error(" No credit limit available");
		}
		if (orderTotal === null || orderTotal === undefined) {
		throw new Error(" No order total available");
		}
		if (creditLimit <= 0) {
		throw new Error(
		` Credit Limit Exceeded - Current credit:${creditLimit}`
		);
		}
		if (related.Account === undefined) {
			throw new Error(`This order is not associated with an account.`);
		}
		if (isPORequired === undefined) {
			throw new Error(`No access to PO Required field.`);
		}
		if (isPORequired && !poNumber) {
			throw new Error(`Please fill out the Purchase Order number before completing the order!`);
		}
		payload.data.message = `Order Validated`;
	} catch (error) {
		payload.data.error = error?.message;
	}
	payload.data.updateDeviceData = true;
	payload.data.updateDeviceData.Order = true;
	payload.data.updateDeviceData.OrderIem = true;
	payload.data.reprice = true;

	return payload;
}
