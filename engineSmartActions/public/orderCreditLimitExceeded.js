function runAction(e){try{const{record:r,related:a}=e.data,[c]=a.Account,t=c.AvailableCredit__c,i=r.TotalAmount,d=r.OrderRecordTypeName__c;if(d=="Field Direct Order"){if(t==null)throw new Error("No credit limit available");if(i==null)throw new Error("No order total available");if(i>t)throw new Error(`Credit Limit Exceeded - Current credit: ${t} and Order Total is ${i}`)}e.data.message=`Order total ${i} is within credit limit of ${t}RT = ${d}`}catch(r){e.data.error=r==null?void 0:r.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}
