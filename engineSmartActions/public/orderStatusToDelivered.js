function runAction(e){try{const{record:r}=e.data;r.Status==="Pending Delivery"&&(r.Status="Delivered",e.data.message="Order Delivered")}catch(r){e.data.error=r==null?void 0:r.message}return e.data.updateDeviceData={order:!0,orderItem:!0},e.data.reprice=!1,e}
