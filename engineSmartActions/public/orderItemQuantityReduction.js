function runAction(e){e.data.message="The Order Item Quantities have been reduced";let t=e.data.record,i=new Map,d=new Map;if(e.data.related.PricebookEntry.forEach(a=>{i.set(a.Product2Id,a)}),e.data.related.OrderItem.forEach(a=>{d.set(a.Product2Id,a)}),t.OrderItemQuantityAdjusted__c!==!0)for(let a=1;a<11;a++){let r="MissingProduct"+a+"__c",u="MissingQuantity"+a+"__c";if(e.data.message+=`
product lookup name `+r+" product quantity "+u,e.data.message+=`
product lookup name value `+t[r]+" product quantity value "+t[u],t[r]&&t[u]&&d.has(t[r])&&i.has(t[r])&&d.get(t[r]).Quantity-t[u]>=0){let n=d.get(t[r]).Quantity-t[u];e.data.message+=`
Actually in the logic aaaa new amount = `+n+"",d.get(t[r]).Quantity-=t[u],t.OrderItemQuantityAdjusted__c=!0,e.data.message+=`
`+i.get(t[r]).Name+": "+t[u]}}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderItem=!0,e.data.reprice=!1,e}
