function runAction(payload) {
  try {
    const { data } = payload;
    const { record } = data;

    if(record.Status === 'Pending Delivery'){
      record.Status = 'Delivered';
      payload.data.message = 'Order Delivered';
    }
    
  } catch (error) {
    payload.data.error = error?.message;
  }
  payload.data.updateDeviceData.Order = true;
  payload.data.updateDeviceData.OrderItem = false;
  payload.data.reprice = false;

  return payload;
}
