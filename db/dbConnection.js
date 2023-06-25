const data="DATA";
const itemData="itemData";
const orderData="orderData";
const orderDetailsData="orderDetailsData";


export function saveOrderDetailsDB(new_customer) {

    let pre_data = localStorage.getItem(orderDetailsData);
    let data_arr=[];


    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }

    data_arr.push(new_customer);
    console.log(JSON.stringify(new_customer));
    localStorage.setItem(orderDetailsData,JSON.stringify(data_arr));

}


export function saveCustomerDB(new_customer) {

    let pre_data = localStorage.getItem(data);
    let data_arr=[];


    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }

    data_arr.push(new_customer);
    console.log(JSON.stringify(new_customer));
    localStorage.setItem(data,JSON.stringify(data_arr));

}

export function saveOrderDB(new_order) {

    let pre_data = localStorage.getItem(orderData);
    let data_arr=[];

    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }

    data_arr.push(new_order);
    console.log(JSON.stringify(new_order));
    localStorage.setItem(orderData,JSON.stringify(data_arr));

}


export function saveItemDB(new_item) {

    let pre_data = localStorage.getItem(itemData);
    let data_arr=[];


    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }

    data_arr.push(new_item);
    console.log(JSON.stringify(new_item));
    localStorage.setItem(itemData,JSON.stringify(data_arr));

}



export function loadCustomerDB() {
    let pre_data = localStorage.getItem(data);
    let data_arr=[];


    if(pre_data){
        data_arr=JSON.parse(pre_data);
    }
}

