function runAction(e){try{const{record:r,related:t}=e.data,[o]=t.Account,c=o.ProofOfDeliveryRequired__c,a=r.PoNumber;if(t.Account===void 0)throw new Error("This order is not associated with an account.");if(c===void 0)throw new Error("No access to ProofOfDeliveryRequired__c");if(c&&!a)throw new Error("Please fill out the Purchase Order number before completing the order!");e.data.message="Order Validated"}catch(r){e.data.error=r==null?void 0:r.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderItem=!1,e.data.reprice=!1,e}
