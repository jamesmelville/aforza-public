function runAction(payload) {
  try {
    const { record: order, related } = payload.data;
    const [account] = related.Account;
    const creditLimit = account.AvailableCredit__c;
    const orderTotal = order.TotalAmount;
    const orderRecordtypeId = order.RecordTypeId;
    /*
    @eddy - 04/01/23
    The below hardcoded Id's were put in place due to a possible aforza limitation, 
    where we were not able to get the specific RT developername from a formula field on Order object or other similar approach,
    since these orders will most likely always be made through the aforza app, formula fields and flows won't work.
    James from Aforza suggested this approach, but we are still waiting to see if we can use the "related" obj on this class to get the RT, 
    just like we are doing getting the related account. If something like that is possible, then we can change logic to remove hardcoded Id's.
    */
    if(orderRecordtypeId === "0122z000001WSqFAAW"/*QA Field Direct Order Id*/ ||
      orderRecordtypeId === "0123G000000FddhQAC"/*SIT Field Direct Order Id*/ ||
      orderRecordtypeId === "0122z000001cDV0AAM"/*UAT Field Direct Order Id*/ ||
      orderRecordtypeId === "0128d000000cikJAAQ"/*PROD Field Direct Order Id*/){
      if (creditLimit === null || creditLimit === undefined) {
        throw new Error("No credit limit available");
      }
      if (orderTotal === null || orderTotal === undefined) {
        throw new Error("No order total available");
      }
      if (orderTotal > creditLimit) {
        throw new Error(`Credit Limit Exceeded - Current credit: ${creditLimit} and Order Total is ${orderTotal}`);
      }
      payload.data.message = `Order total ${orderTotal} is within credit limit of ${creditLimit}`;
    }
  } catch (error) {
    payload.data.error = error?.message;
  }
  payload.data.updateDeviceData = true;
  payload.data.updateDeviceData.Order = true;
  payload.data.updateDeviceData.OrderItem = true;
  payload.data.reprice = true;

  return payload;
}
