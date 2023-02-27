function runAction(payload) {

    if(["Delivered", "Receipted"].includes(payload.data.record.Status)) {
        payload.data.error = "You can't open an order once delivered.";
		payload.data.blockExecution = true;
    }
    else {
        payload.data.message = "Order ready for delivery";
    }
    payload.data.updateDeviceData = false;
    payload.data.reprice = false;
    return payload;
}