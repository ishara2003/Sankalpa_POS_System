import{Item} from "../modle/Item.js";
import {saveItemDB} from "../db/dbConnection.js";

const itemData="itemData";

export class ItemController {

    constructor() {

            $('#btn_add_item').click(this.saveItem.bind(this));
            $('#btn_clear_txt_filed_item').click(this.deleteItem.bind(this));
            $('#order_item_name').keyup(this.search.bind(this));
            $('#btn_search_item').keyup(this.search.bind(this));
            this.LoadItemData();

    }

    search(){

        let item_id = $('#order_item_name').val();

        let pre_data =JSON.parse(localStorage.getItem(itemData));

        let search1 = searchItem(pre_data,item_id);
        if(search1!==null){

            console.log(search1._name);

            $('#order_item_qty').val(search1._qty);
            $('#order_item_price').val(search1._price);

        }

    }

    deleteItem(i){

        i=$('#item_ID').val();

        let item=JSON.parse(localStorage.getItem(itemData));

        item.map((result,index) => {
            if (result._id===i){

                item.splice(index,1);
            }
        });

        localStorage.setItem(itemData,JSON.stringify(item));
        this.LoadItemData();

    }

    saveItem(){
        console.log("Sex");

            let item_id = $('#item_ID').val();
            let item_name = $('#item_Name').val();
            let item_qty = $('#item_QTY').val();
            let item_price = $('#item_Price').val();

        console.log(item_id, item_name, item_qty, item_price);

        let item = new Item(item_id,item_name,item_qty,item_price);

            saveItemDB(item);
            this.LoadItemData();

    }

    LoadItemData(){

        $('#btl_item_tbody').empty();

       /* let item_id = $("#item_ID").val();
        console.log(item_id);
        let item_name = $("#item_Name").val();
        let item_qty = $("#item_QTY").val();
        let item_price = $("#item_Price").val();*/


        let pre_item = localStorage.getItem(itemData);
        let parse = JSON.parse(pre_item);

        parse.map((result,index)=>{
            $('#tbl_item').append("<tr>" +
                "<td scope='row'>" + result._id + "</td>" +
                "<td>" + result._name + "</td>" +
                "<td>" + result._price + "</td>" +
                "<td>" + result._qty + "</td>" +
                "</tr>")
        });



    }

}

function searchItem(arr, item_Id) {

    for (const arrElement of arr){
        if (arrElement._id===item_Id){
            console.log(arrElement);
            return arrElement;
        }
    }
    return null;

}

new ItemController();



$('#tbl_item').on('click','tr',(event)=>{

    // let text = $(event.target.parentNode).eq(0).text();
    let id = $(event.target).closest('tr').find('td').eq(0).text();
    let name = $(event.target).closest('tr').find('td').eq(1).text();
    let qty = $(event.target).closest('tr').find('td').eq(2).text();
    let price = $(event.target).closest('tr').find('td').eq(3).text();

    $('#item_ID').val(id);
    $('#item_Name').val(name);
    $('#item_QTY').val(qty);
    $('#item_Price').val(price);

    console.log(id, name, qty, price);


});

