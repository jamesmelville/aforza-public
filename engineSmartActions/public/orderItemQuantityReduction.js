function runAction(e){let d=new Array,n=new Array,c=e.data.record,l=new Map,o=new Map;e.data.related.PricebookEntry.forEach(t=>{t.Pricebook2Id==c.Pricebook2Id&&l.set(t.Product2Id,t)}),e.data.related.OrderItem.forEach(t=>{if(t.aforza__Promotion__c)if(l.has(t.Product2Id)||n.push("Product "+t.Product2Id+" missing from Pricebook."),t.Quantity=t.OriginalQuantity__c,o.has(t.Product2Id)){let i=o.get(t.Product2Id),r=0;for(;r<i.length&&t.UnitPrice<i[r].UnitPrice;)r++;i.splice(r,0,t)}else o.set(t.Product2Id,new Array(t))});for(let t=1;t<11;t++){let i=c["MissingProduct"+t+"__c"],r=c["MissingQuantity"+t+"__c"];if(i&&!o.has(i))n.push("Missing Product "+t+" is not included in a Promotion in this order. Please check for the correct product.");else if(i&&!r)n.push("Please enter a quantity for Missing Product "+t+".");else if(i&&r){let P=o.get(i),s=r,u=0;for(;s>0&&u<P.length;){let a=P[u];a.Quantity>=s?(a.Quantity=a.Quantity-s,s=0):(s=s-a.Quantity,a.Quantity=0),u++}s>0?n.push("Missing Quantity exceeds ordered promotional quantity for Missing Product "+t+"."):d.push("Promotional Quantity(ies) adjusted for Missing Product "+t+".")}}return n.length>0?(e.data.error=n.join(`\r
`),e.data.updateDeviceData=!1,e.data.reprice=!1,e.data.blockExecution=!0):(e.data.message=d.join(`\r
`),e.data.updateDeviceData={Order:!0,OrderItem:!0},e.data.reprice=!1),e}
