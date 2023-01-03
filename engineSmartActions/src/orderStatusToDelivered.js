function runAction(payload) {
  try {

    if(payload.data.Status === 'Pending Delivery'){
      payload.data.Status = 'Delivered';
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
