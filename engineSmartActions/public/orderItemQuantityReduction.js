function runAction(e){e.data.message="The Order Item Quantities have been reduced";let t=e.data.record,i=new Map,d=new Map;if(e.data.related.PricebookEntry.forEach(r=>{i.set(r.Product2Id,r)}),e.data.related.OrderItem.forEach(r=>{d.set(r.Product2Id,r)}),t.OrderItemQuantityAdjusted__c!==!0)for(let r=1;r<11;r++){let a="MissingProduct"+r+"__c",u="MissingQuantity"+r+"__c";e.data.message+=`
product lookup name `+a+" product quantity "+u,e.data.message+=`
product lookup name value `+t[a]+" product quantity value "+t[u],t[a]&&t[u]&&d.has(t[a])&&i.has(t[a])&&d.get(t[a]).Quantity-t[u]>=0&&(e.data.message+=`
Actually in the logic`,d.get(t[a]).Quantity-=t[u],t.OrderItemQuantityAdjusted__c=!0,e.data.message+=`
`+i.get(t[a]).Name+": "+t[u])}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderItem=!0,e.data.reprice=!1,e}
