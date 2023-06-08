import{Item} from "../modle/Item.js";
import {saveItemDB} from "../db/dbConnection.js";

const itemData="itemData";

export class ItemController {

    constructor() {

            $('#btn_add_item').click(this.saveItem.bind(this));
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

        let item_id = $("#item_ID").val();
        console.log(item_id);
        let item_name = $("#item_Name").val();
        let item_qty = $("#item_QTY").val();
        let item_price = $("#item_Price").val();

        $('#tbody_item').empty();

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
new ItemController();