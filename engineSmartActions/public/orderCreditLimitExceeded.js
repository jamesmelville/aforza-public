function runAction(e){try{let i=new Date().getTime();const{record:a,related:c}=e.data,[o]=c.Account,t=o.AvailableCredit__c,r=a.TotalAmount,d=a.RecordTypeId;if(d==="0122z000001WSqFAAW"||d==="0123G000000FddhQAC"||d==="0122z000001cDV0AAM"||d==="0128d000000cikJAAQ"){if(t==null)throw new Error("No credit limit available");if(r==null)throw new Error("No order total available");if(r>t)throw new Error(`Credit Limit Exceeded - Current credit: ${t} and Order Total is ${r}`);e.data.message=`Order total ${r} is within credit limit of ${t}`}e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderItem=!0,e.data.reprice=!0;let n=new Date().getTime();e.data.message="Execution time "+(i-n)+". The start time "+i+" and end time "+n}catch(i){e.data.error=i.message}return e}
