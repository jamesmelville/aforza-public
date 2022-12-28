function runAction(payload) {
  try {
    const { record: order, related } = payload.data;
    const [account] = related.Account;
    const creditLimit = account.AvailableCredit__c;
    const orderTotal = order.TotalAmount;
    const orderRecordtype = order.OrderRecordTypeName__c;
    if(orderRecordtype == 'Field Direct Order'){
      if (creditLimit === null || creditLimit === undefined) {
        throw new Error("No credit limit available");
      }
      if (orderTotal === null || orderTotal === undefined) {
        throw new Error("No order total available");
      }
      if (orderTotal > creditLimit) {
        throw new Error(`Credit Limit Exceeded - Current credit: ${creditLimit} and Order Total is ${orderTotal}`);
      }
    }
    payload.data.message = `Order total ${orderTotal} is within credit limit of ${creditLimit}`+`RT = ${orderRecordtype}`;
  } catch (error) {
    payload.data.error = error?.message;
  }
  payload.data.updateDeviceData = true;
  payload.data.updateDeviceData.Order = true;
  payload.data.updateDeviceData.OrderItem = true;
  payload.data.reprice = true;

  return payload;
}
