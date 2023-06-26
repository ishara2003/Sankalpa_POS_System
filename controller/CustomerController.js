import {Customer} from "../modle/Customer.js";
import {saveCustomerDB} from "../db/dbConnection.js";

const data="DATA";
export class CustomerController {

    constructor() {
        $('#btn_add_customer').click(this.handleCustomerValidation.bind(this));
        $('#btn_update').click(this.handleUpdateCustomer.bind(this));
        $('#btn_clear_txt_filed').click(this.handleDeleteCustomer.bind(this));
        $('#order_cus_nic').keyup(this.show_Cus_Name.bind(this));
        this.handleLoadCustomerDatar();

    }

    show_Cus_Name(){

        console.log("NIC Key presed");
        let cus_nic=$('#order_cus_nic').val();

        let pre_data =JSON.parse(localStorage.getItem(data));

       let search1 = search(pre_data,cus_nic);
       if(search1!==null){

           console.log(search1._name);

           $('#order_cus_name').val(search1._name);

       }

    }

    handleCustomerValidation(){


        const regex=/^\d+$/;

        /*(!regex.test($('#Customer_Id').val())?alert("Invalid id"):
            !regex.test($('#Customer_Name').val())?alert("Invalid Name"):
                !regex.test($('#Customer_Address').val())? alert("Invalid Address"):
                    !regex.test($('#Customer_Number').val())?alert("Invalid Number"):
                        this.handleSaveCustomer());
*/
this.handleSaveCustomer();

       /* if(!regex.test($('#Customer_Id').val())){
            alert("Invalid Id")
        }else if(
            !regex.test($('#Customer_Name').val())){
            alert("Invalid Id")

        }else if(
            !regex.test($('#Customer_Address').val())){
            alert("Invalid Address")

        }else if(
            !regex.test($('#Customer_Number').val())){
            alert("Invalid Number")

        }else {
            this.handleSaveCustomer();
        }*/

    }

    handleSaveCustomer() {


        let cus_nic = $("#Customer_Id").val();
        let cus_name = $("#Customer_Name").val();
        let cus_address = $("#Customer_Address").val();
        let cus_number = $("#Customer_Number").val();

        console.log(cus_nic, cus_name, cus_address, cus_number);


     /*   let pre_data = localStorage.getItem(data);
        let data_arr=[];
        if(pre_data){
            data_arr=JSON.parse(pre_data);
        }*/

       /* var cus_obj ={
            Cus_NIC: cus_nic,
            Cus_name: cus_name,
            Cus_Address: cus_address,
            Cus_Num: cus_number
        }*/

        let new_customer = new Customer(cus_nic,cus_name,cus_address,cus_number);
            saveCustomerDB(new_customer);


       /* data_arr.push(cus_obj);
        console.log(JSON.stringify(cus_obj));
        localStorage.setItem(data,JSON.stringify(data_arr));
*/
        this.handleLoadCustomerDatar();
    }

    handleUpdateCustomer(i){
        console.log("UpdateCustomer");

      this.update_Cus();
        this.handleLoadCustomerDatar();

    }

    handleDeleteCustomer(i){

        i=$('#Customer_Id').val();

            let customers=JSON.parse(localStorage.getItem(data));

            customers.map((result,index) => {
                if (result._nic===i){

            customers.splice(index,1);
                }
        });

            localStorage.setItem(data,JSON.stringify(customers));
            this.handleLoadCustomerDatar();

    }

    handleLoadCustomerDatar(){

            $('#tbody_customer').empty();

        let pre_data = localStorage.getItem(data);
        let customer_data_arr = JSON.parse(pre_data);

        customer_data_arr.map((result,index)=>{
            $('#tbody_customer').append("<tr>" +
                "<td scope='row'>" + result._nic + "</td>" +
                "<td>" + result._name + "</td>" +
                "<td>" + result._address + "</td>" +
                "<td>" + result._number + "</td>" +
                "</tr>")
        })

    }

    update_Cus(){

        let parse = JSON.parse(localStorage.getItem(data));

        let cus_nic = $("#Customer_Id").val();
        let cus_name = $("#Customer_Name").val();
        let cus_address = $("#Customer_Address").val();
        let cus_number = $("#Customer_Number").val();

        let new_customer = new Customer(cus_nic,cus_name,cus_address,cus_number);



        let index=checkCusResentId(parse,cus_nic);

        if (index!==null){

            index._name=$('#Customer_Name').val();
            index._address=$('#Customer_Address').val();
            index._number=$('#Customer_Number').val();

            parse.splice(index,new_customer);
        }
        localStorage.setItem(data,JSON.stringify(parse));
        this.handleLoadCustomerDatar();



    }
}

function search(arr, nic) {
    for (const arrElement of arr){
        if (arrElement._nic===nic){
            console.log(arrElement);
            return arrElement;
        }
    }
        return null;
}

function checkCusResentId(arr,nic){
    for (const arrElement of arr){
        if (arrElement._nic===nic){
            // console.log(arrElement);
            return arrElement;
        }
    }
    return null;
}

new CustomerController();

$('#tbl_customer').on('click','tr',(event)=>{

    // let text = $(event.target.parentNode).eq(0).text();
    let nic = $(event.target).closest('tr').find('td').eq(0).text();
    let name = $(event.target).closest('tr').find('td').eq(1).text();
    let address = $(event.target).closest('tr').find('td').eq(2).text();
    let number = $(event.target).closest('tr').find('td').eq(3).text();

    $('#Customer_Id').val(nic);
    $('#Customer_Name').val(name);
    $('#Customer_Address').val(address);
    $('#Customer_Number').val(number);

    console.log(nic, name, address, number);


});

