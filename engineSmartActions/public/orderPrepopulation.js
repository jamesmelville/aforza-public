function runAction(e){let t=e.data.related.Account[0],r=e.data.record;return r.Depot__c=t.Depot__c,r.Grid__c=t.PrimaryGridNumber__c,r.DeliveryDate__c=t.NextDeliveryDate__c,r.Route__c=t.PrimaryRouteReference__c,!t.Depot__c||!t.PrimaryGridNumber__c||!t.NextDeliveryDate__c||!t.PrimaryRouteReference__c?e.data.message="You may need to populate the Depot, Grid, Delivery Date, and Route fields!":e.data.message="Let's do this!",e.data.updateDeviceData={Order:!0,OrderItem:!0},e.data.reprice=!1,e.data.blockExecution=!1,e}
