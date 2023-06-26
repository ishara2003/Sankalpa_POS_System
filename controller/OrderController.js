import {Order} from "../modle/Order.js";
import {saveOrderDB} from "../db/dbConnection.js";
import {saveOrderDetailsDB} from "../db/dbConnection.js";
import {Order_Details} from "../modle/Order_Details.js";


const orderData="orderData";
const orderDetailsData="orderDetailsData";

let tot =0;

export class OrderController {

    constructor() {
        $('#btn_add_to_cart').click(this.saveOrder.bind(this));
        $('#btn_order_clear').click(this.handleDeleteOrder.bind(this));
        $('#btn_place_order').click(this.placeOrder.bind(this));
        $('#order_date').click(this.setDate.bind(this));
        this.LoadOrderDetailsData();
        // this.LoadOrderData();
        this.setDate();
    }

    placeOrder(){

        this.LoadOrderDetailsData();
        this.clearText();
        this.LoadOrderData();

        localStorage.removeItem(orderData);
    }

    saveOrder(){

        let o_Id = $('#order_id').val();
        let o_item_name = $('#order_item_name').val();
        let o_qty = $('#order_qty').val();
        let o_price = $('#order_item_price').val();

        console.log(o_Id,o_item_name,o_qty,o_price);

        let order = new Order(o_Id,o_item_name,o_qty,o_price);

        saveOrderDB(order);
        this.LoadOrderData();

        tot += o_qty * o_price;

        $('#txt_total').val(tot);

        // let od_Id = $('#order_id').val();
        let od_cusNIC = $('#order_cus_nic').val();
        let od_date = $('#order_date').val();
        // let od_itemName = $('#order_item_name').val();
        // let od_usedQTY = $('#order_qty').val();
        // let od_unitPrice = $('#order_item_price').val();
        let od_total = $('#txt_total').val();

        console.log(o_Id, od_cusNIC, od_date,od_date,o_item_name,o_qty,o_price, od_total);

        let orderDetails = new Order_Details(o_Id,od_cusNIC,od_date,o_item_name,o_qty,o_price,od_total);
        saveOrderDetailsDB(orderDetails);

    }

    LoadOrderData(){

        $('#tbody_order').empty();

        let pre_item = localStorage.getItem(orderData);
        let parse = JSON.parse(pre_item);

        parse.map((result,index)=>{

        $('#tbl_order').append("<tr>" +
            "<th scope='row'>" + result._id + "</th>" +
            "<td>" + result._date + "</td>" +
            "<td>" + result._total + "</td>" +
            "<td>" + result._used_qty + "</td>" +
            "</tr>")

        });

    }

    LoadOrderDetailsData(){

        $('#tbody_order_details').empty();

        let pre_item = localStorage.getItem(orderDetailsData);
        let parse = JSON.parse(pre_item);

        parse.map((result,index)=>{

        $('#tbl_order_details').append("<tr>" +
            "<th scope='row'>" + result._od_id + "</th>" +
            "<td>" + result._od_cusNIC + "</td>" +
            "<td>" + result._od_date + "</td>" +
            "<td>" + result._od_itemName + "</td>" +
            "<td>" + result._od_usedQTY + "</td>" +
            "<td>" + result._od_unitPrice + "</td>" +
            "<td>" + result._od_tot + "</td>" +
            "</tr>")

        });

    }

    handleDeleteOrder(i){

        i=$('#order_id').val();

        let order=JSON.parse(localStorage.getItem(orderData));

        order.map((result,index) => {
            if (result._id===i){

                order.splice(index,1);
            }
        });
        localStorage.setItem(orderData,JSON.stringify(order));
        this.LoadOrderData();

        let o_qty = $('#order_qty').val();
        let o_price = $('#order_item_price').val();

        tot -= o_qty * o_price;
        $('#txt_total').val(tot);



    }

    setDate(){

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    $('#order_date').val(formattedDate);


}

    clearText(){

        $('#order_id').val("");
        $('#order_item_name').val("");
         $('#order_qty').val("");
         $('#order_item_price').val("");
         $('#order_item_qty').val("");
         $('#order_cus_nic').val("");
         $('#order_cus_name').val("");
         $('#order_date').val("");
        $('#txt_total').val("");

    }

}

new OrderController();


$('#tbl_order').on('click','tr',(event)=>{

    // let text = $(event.target.parentNode).eq(0).text();
    let id = $(event.target).closest('tr').find('td').eq(0).text();
    let name = $(event.target).closest('tr').find('td').eq(1).text();
    let qty = $(event.target).closest('tr').find('td').eq(2).text();
    let price = $(event.target).closest('tr').find('td').eq(3).text();

    $('#order_id').val(price);
    $('#order_item_name').val(id);
    $('#order_qty').val(qty);
    $('#order_item_price').val(name);

    console.log(id, name, qty, price);


});

let counter = 1;

function generateOrderId() {
    const paddedCounter = String(counter).padStart(3, '0'); // Pad counter with leading zeros
    const orderId = paddedCounter;
    counter++; // Increment counter for the next order
    return orderId;
}

const generatedOrderId = generateOrderId();
console.log(generatedOrderId); // Output: 001

const anotherOrderId = generateOrderId();
console.log(anotherOrderId); // Output: 002


