function runAction(e){e.data.message="The Order Item Quantities have been reduced";let t=e.data.record,i=new Map,d=new Map;if(e.data.related.PricebookEntry.forEach(r=>{i.set(r.Product2Id,r)}),e.data.related.OrderItem.forEach(r=>{d.set(r.Product2Id,r)}),t.OrderItemQuantityAdjusted__c!==!0)for(let r=1;r<11;r++){let u="MissingProduct"+r+"__c",a="MissingQuantity"+r+"__c";e.data.message+=`
product lookup name `+u+" product quantity "+a,e.data.message+=`
product lookup name value `+t[u]+" product quantity value "+t[a],t[u]&&t[a]&&d.has(t[u])&&i.has(t[u])&&d.get(t[u]).Quantity-t[a]>=0&&(d.get(t[u]).Quantity-=t[a],t.OrderItemQuantityAdjusted__c=!0,e.data.message+=`
`+i.get(t[u]).Name+": "+t[a])}return e.data.updateDeviceData={order:!0,orderItem:!0},e.data.reprice=!1,e}
