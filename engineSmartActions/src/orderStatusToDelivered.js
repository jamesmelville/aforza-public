function runAction(payload) {
  try {
    const { record: order } = payload.data;
    const orderStatus = order.Status;

    if(orderStatus == 'Pending Delivery'){
        orderStatus = 'Delivered';
    }
    
  } catch (error) {
    payload.data.error = error?.message;
  }
  payload.data.updateDeviceData = true;
  payload.data.updateDeviceData.Order = true;
  payload.data.updateDeviceData.OrderIem = true;
  payload.data.reprice = true;

  return payload;
}
