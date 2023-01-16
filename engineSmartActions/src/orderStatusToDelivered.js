function runAction(payload) {
    try {
        const {record: order} = payload.data;

        if (order.Status === 'Pending Delivery') {
            order.Status = 'Delivered';
            payload.data.message = 'Order Delivered';
        }

    } catch (error) {
        payload.data.error = error?.message;
    }
    payload.data.updateDeviceData = {
        Order: true,
        OrderItem: true
    }
    payload.data.reprice = false;

    return payload;
}
