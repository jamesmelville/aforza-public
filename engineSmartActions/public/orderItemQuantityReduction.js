function runAction(e){let c=new Array,n=new Array,a=e.data.record,l=new Map,o=new Map;e.data.related.PricebookEntry.forEach(t=>{t.Pricebook2Id==a.Pricebook2Id&&l.set(t.Product2Id,t)}),e.data.related.OrderItem.forEach(t=>{if(l.has(t.Product2Id)||n.push("Product "+t.Product2Id+" missing from Pricebook."),c.push("Item "+t.Id+" orig qty ="+t.OriginalQuantity__c+"."),o.has(t.Product2Id)){let i=o.get(t.Product2Id),r=0;for(;r<i.length&&t.UnitPrice<i[r].UnitPrice;)r++;i.splice(r,0,t)}else o.set(t.Product2Id,new Array(t))});for(let t=1;t<11;t++){let i=a["MissingProduct"+t+"__c"],r=a["MissingQuantity"+t+"__c"];if(i&&!o.has(i))n.push("Missing Product "+t+" is not included in a Promotion in this order. Please check for the correct product.");else if(i&&!r)n.push("Please enter a quantity for Missing Product "+t+".");else if(i&&r){let P=o.get(i),s=r,d=0;for(;s>0&&d<P.length;){let u=P[d];u.Quantity>=s?(u.Quantity=u.Quantity-s,s=0):(s=s-u.Quantity,u.Quantity=0),d++}s>0?n.push("Missing Quantity exceeds ordered promotional quantity for Missing Product "+t+"."):c.push("Promotional Quantity(ies) adjusted for Missing Product "+t+".")}}return n.length>0?(e.data.error=n.join(`\r
`),e.data.updateDeviceData=!1,e.data.reprice=!1,e.data.blockExecution=!0):(e.data.message=c.join(`\r
`),e.data.updateDeviceData={Order:!0,OrderItem:!0},e.data.reprice=!1),e}
