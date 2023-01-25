function runAction(payload) {
	try {
		const { record: order, related } = payload.data;
		const [account] = related.Account;
		const isPORequired = account.PORequired__c;
		const poNumber = order.PoNumber;
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
		payload.data.error = error.message;
		payload.data.blockExecution = true;
	}
	payload.data.updateDeviceData = false;
	payload.data.reprice = false;

	return payload;
}