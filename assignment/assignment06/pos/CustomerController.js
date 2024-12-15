import CustomerModel from "../model/CustomerModel.js";
import {customer_array} from "../db/database.js";

let selected_customer_index = null;

//Save Customer
$("#save-customer").on('click', function () {
    let cus_name = $('#customerName').val();
    let cus_address = $('#address').val();
    let cus_contact = $('#contact').val();
    let cus_email = $('#email').val();

    if(cus_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Name",
        });
    } else if(cus_address.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Address",
        });
    } else if(!validateEmail(cus_email)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Email",
        });
    } else if(!validateContact(cus_contact)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Contact",
        });
    } else {

        let customer = new CustomerModel(
            customer_array.length + 1,
            cus_name,
            cus_address,
            cus_contact,
            cus_email
        );

        customer_array.push(customer);

        clearCustomerForm();
        loadCustomerTable();
    }
});

//Update Customer
$("#update-customer").on('click', function () {
   let index = selected_customer_index;

    let cus_name = $('#customerName').val();
    let cus_address = $('#address').val();
    let cus_contact = $('#contact').val();
    let cus_email = $('#email').val();

    let customer = new CustomerModel(
        customer_array.length + 1,
        cus_name,
        cus_address,
        cus_contact,
        cus_email
    );

    customer_array[selected_customer_index] = customer;

    clearCustomerForm();
    loadCustomerTable();
});

//Delete Customer
$("#delete-customer").on('click', function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            customer_array.splice(selected_customer_index, 1);

            // clean customer form
            clearCustomerForm();

            // reload the table
            loadCustomerTable();

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your customer has been deleted.",
                icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
});

$("#cus-tbl-body").on('click', 'tr', function () {
   let index = $(this).index();

   selected_customer_index = $(this).index();

   //get customer object by index
   let customer_obj = customer_array[index];

   let cus_name = customer_obj.name;
   let cus_address = customer_obj.address;
   let cus_contact = customer_obj.contact;
   let cus_email = customer_obj.email;

   $('#customerName').val(cus_name);
   $('#address').val(cus_address);
   $('#contact').val(cus_contact);
   $('#email').val(cus_email);
});

const clearCustomerForm = () => {
    $('#customerName').val("");
    $('#address').val("");
    $('#contact').val("");
    $('#email').val("");
}

const loadCustomerTable = () => {
    $("#cus-tbl-body").empty();
    customer_array.map((customers, index) => {
        let cusData = `<tr><td>${customers.id}</td><td>${customers.name}</td><td>${customers.address}</td><td>${customers.contact}</td><td>${customers.email}</td></tr>`;
        $("#cus-tbl-body").append(cusData);
    });
}

const validateContact = (contact) => {
    const contactRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return contactRegex.test(contact);
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}