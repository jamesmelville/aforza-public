function runAction(payload) {
  try {
    const { record: order, related } = payload.data;
    const [account] = related.Account;
    const orderStatus = order.Status;

    if(orderStatus === 'Pending Delivery'){
      orderStatus = 'Delivered';
    }
    payload.data.message = 'Order Delivered';
  } catch (error) {
    payload.data.error = error?.message;
  }
  payload.data.updateDeviceData = true;
  payload.data.updateDeviceData.Order = true;
  payload.data.updateDeviceData.OrderItem = true;
  payload.data.reprice = true;

  return payload;
}
